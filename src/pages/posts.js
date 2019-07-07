import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const postTypes = {
  medium: 'medium',
  local: 'local',
};

const getMediumUrl = slug => `https://medium.com/@Zepro/${slug}`;

const formatPosts = (posts, type) =>
  posts.map(p => ({ ...p, date: p.date || p.firstPublishedAt, type }));

const Posts = ({ data }) => {
  const posts = [
    ...formatPosts(
      data.allMarkdownRemark.nodes.map(p => p.frontmatter),
      postTypes.local
    ),
    ...formatPosts(data.allMediumPost.nodes, postTypes.medium),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));
  console.log(posts);
  const renderCard = (post, i) => {
    if (post.type === postTypes.medium) {
      return (
        <Card
          key={`post-${i}`}
          title={post.title}
          date={post.date}
          excerpt={post.virtuals.subtitle}
          tags={post.virtuals.tags.map(t => t.name)}
          url={getMediumUrl(post.uniqueSlug)}
          cardImgUrl={post.cardImage}
          cardImageAuthor={post.cardImageAuthor}
        />
      );
    } else if (post.type === postTypes.local) {
      return (
        <Card
          key={`post-${i}`}
          title={post.title}
          date={post.date}
          excerpt={post.description}
          tags={post.tags}
          url={post.slug}
          cardImgUrl={post.cardImage}
          cardImageAuthor={post.cardImageAuthor}
        />
      );
    }
    return null;
  };

  const Cards = styled.div`
    article {
      margin-top: 3rem;
    }
  `;

  return (
    <Layout>
      <SEO title="Blog" keywords={[`blog`, `Ville Halminen`]} />
      <Grid>
        <Row>
          <Col>
            <h1>Posts</h1>
            <Cards>{posts.map(renderCard)}</Cards>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Posts;
export const query = graphql`
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
        }
      }
    }
    allMediumPost {
      nodes {
        id
        title
        firstPublishedAt
        uniqueSlug
        virtuals {
          subtitle
          tags {
            name
          }
        }
      }
    }
  }
`;
