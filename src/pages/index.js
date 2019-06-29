import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Grid>
      <Row>
        <Col>
          <div>
            <p />
            <h1>Hi!</h1>
            <p>
              I’m a software developer at{' '}
              <a
                href="https://tentimesagency.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tentimes agency
              </a>{' '}
              in{' '}
              <a
                href="https://www.google.fi/maps/place/Helsinki/@37.4184233,30.9071716,3.79z/data=!4m5!3m4!1s0x46920bc796210691:0xcd4ebd843be2f763!8m2!3d60.1698557!4d24.9383791"
                target="_blank"
                rel="noopener noreferrer"
              >
                Helsinki
              </a>
              . I build all sorts of modern web applications for organizations
              in different industries.
            </p>
            <p>
              I’m currently working on web applications built with TypeScript,
              Gatsby.js, React, GraphQL, and Node.js. In my projects, I usually
              do front-end and back-end development, as well as DevOps.
            </p>
            <p>
              Feel free to contact me by email at{' '}
              <a
                href="mailto:ville.halminen@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ville.halminen@gmail.com
              </a>
              . You can also find me on{' '}
              <a
                href="https://twitter.com/VilleHalminen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/villehalminen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , and{' '}
              <a
                href="https://github.com/v-hal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <p />
          </div>
        </Col>
      </Row>
    </Grid>
  </Layout>
);

export default IndexPage;
