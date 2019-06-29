import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid>
      <Row>
        <Col>
          <h1>About</h1>
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
            Read more about me and what I do on the{' '}
            <Link href="/">home page</Link>.
          </p>
        </Col>
      </Row>
    </Grid>
  </Layout>
);

export default IndexPage;
