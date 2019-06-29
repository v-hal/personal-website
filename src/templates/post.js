import React from 'react';
import { Link, graphql } from 'gatsby';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = props => {
  console.log(props);
  return (
    <Layout>
      <SEO title="Page two" />
      <Grid>
        <Row>
          <Col>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
              }}
            ></div>
            <Link to="/">Go back to the homepage</Link>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
