import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
const illustration1 = require('../images/svg/undraw_coffee_break.svg');

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid>
      <Row>
        <Col>
          <h1>About</h1>
          <Illustration src={illustration1} />
          <p>
            This site is a personal website built with{' '}
            <a
              href="https://gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby.js static site generator
            </a>{' '}
            and it uses{' '}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{' '}
            for hosting.{' '}
            <a
              href="https://www.cloudflare.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </a>{' '}
            is used for CDN and DNS.
          </p>
          <p>
            You can find the source on{' '}
            <a
              href="https://github.com/v-hal/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            Most of the images used in the blog posts are from{' '}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              unsplash.com
            </a>
            . Also check out{' '}
            <a
              href="https://undraw.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              undraw.co
            </a>{' '}
            for some awesome SVG illustrations such as the one on this page.
          </p>
          <p>
            Read more about me and what I do on the{' '}
            <Link to="/">home page</Link>.
          </p>
        </Col>
      </Row>
    </Grid>
  </Layout>
);

const Illustration = styled(SVG)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-height: 20rem;
  display: flex;
  svg {
    max-height: 20rem;
  }
`;

export default IndexPage;
