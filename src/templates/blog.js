import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../components/card';
import styled from 'styled-components';

const postTypes = {
  medium: 'medium',
  local: 'local',
};

const getMediumUrl = slug => `https://medium.com/@Zepro/${slug}`;
const Blog = ({ pageContext }) => {
  const posts = pageContext.posts;
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
          cardImgUrl={post.image.url}
          cardImgAlt={post.image.alt}
          cardImageAuthor={post.image.user.username}
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
          cardImgUrl={post.image.url}
          cardImgAlt={post.image.alt}
          cardImageAuthor={post.image.user.username}
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
      <SEO
        title="Ville Halminen - Blog"
        description="Personal blog about software development, technology and everything else remotely related."
        keywords={[`blog`, `Ville Halminen`]}
      />
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

export default Blog;
