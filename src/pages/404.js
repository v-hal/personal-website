import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SVG from 'react-inlinesvg';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import notFound from '../images/svg/undraw_startled.svg';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Grid>
      <Row>
        <Col>
          <h1>404 - Page not found</h1>
          <p>Sorry...</p>
          <Illustration src={notFound} />
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

export default NotFoundPage;
