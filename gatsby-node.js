const { addLeadingSlash } = require('./src/utils/url');
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
require('dotenv').config();
require('isomorphic-fetch');
const { createApi } = require('unsplash-js');
const toJson = require('unsplash-js').toJson;
const unsplashImages = require('./src/constants/unsplash-images');
const unsplash = new createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  createBlogPosts(graphql, createPage);
  await createBlog(graphql, createPage);
  return null;
};

const getUnsplashImage = (photoId, index) => {
  if (photoId) {
    return unsplash.photos.get({ photoId }).then((x) => x.response);
  } else {
    return unsplash.photos
      .get({ photoId: unsplashImages[index] })
      .then((x) => x.response);
  }
};

const createBlogPosts = (graphql, createPage) => {
  const blogPost = path.resolve(`./src/templates/post.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          nodes {
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.nodes;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : (posts[index + 1] || {}).node;
      const next = index === 0 ? null : (posts[index - 1] || {}).node;
      createPage({
        path: `${addLeadingSlash(post.frontmatter.slug)}`,
        component: blogPost,
        context: {
          slug: post.frontmatter.slug,
          previous,
          next,
        },
      });
    });
    return null;
  });
};

const createBlog = async (graphql, createPage) => {
  const blog = path.resolve(`./src/templates/blog.js`);

  const graphqlResult = await graphql(`
    query AllBlogPosts {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
            date
            description
            cardImage
            cardImageAuthor
            coverImage
            tags
            unsplashImageId
          }
        }
      }
    }
  `);
  const { data } = graphqlResult;

  const formatPosts = (posts, type) =>
    posts.map((p) => ({ ...p, date: p.date || p.firstPublishedAt, type }));

  const postTypes = {
    medium: 'medium',
    local: 'local',
  };

  const posts = await Promise.all(
    [
      ...formatPosts(
        data.allMarkdownRemark.nodes.map((p) => p.frontmatter),
        postTypes.local
      ),
    ]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(async (post, index) => {
        const imageData = await getUnsplashImage(post.unsplashImageId, index);
        const image = {
          url: `${imageData.urls.full}&w=800&h=200&fit=crop`,
          alt: imageData.alt_description,
          user: {
            username: imageData.user.username,
            url: imageData.user.links.html,
          },
        };
        return { ...post, image };
      })
  );

  return createPage({
    path: `/blog`,
    component: blog,
    context: {
      slug: '/blog',
      posts,
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
