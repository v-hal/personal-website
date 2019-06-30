import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = props => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Grid>
        <Row>
          <Col>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            ></div>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default SecondPage;
export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
