import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import { graphql } from 'gatsby';

const Posts = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(p => p.frontmatter);
  return (
    <Layout>
      <SEO title="Blog" keywords={[`blog`, `Ville Halminen`]} />
      <Grid>
        <Row>
          <Col>
            <h1>Posts</h1>
            {posts.map((post, i) => (
              <Card
                key={`post-${i}`}
                title={post.title}
                date={post.date}
                excerpt={post.description}
                tags={[]}
                url={post.slug}
                cardImgUrl={post.cardImage}
                cardImageAuthor={post.cardImageAuthor}
              />
            ))}
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
        frontmatter {
          title
          slug
          date
          description
          cardImage
          cardImageAuthor
          coverImage
        }
      }
    }
  }
`;
