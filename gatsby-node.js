/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
  ).then(result => {
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
        path: `/posts/${post.frontmatter.slug}`,
        component: blogPost,
        context: {
          slug: `/${post.frontmatter.slug}/`,
          previous,
          next,
        },
      });
    });
    createPage({
      path: '/cv',
      component: path.resolve(`./src/pages/cv.js`),
      context: {
        slug: '/cv',
      },
    });

    return null;
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
