import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@smooth-ui/core-sc';
import { Link } from 'gatsby';
import { addLeadingSlash } from '../utils/url';

const Card = ({
  title,
  date,
  excerpt,
  tags,
  url,
  cardImgUrl,
  cardImageAuthor,
}) => (
  <StyledCard>
    <Grid>
      <Row>
        <ImageCol xs={12}>
          <CardLink to={addLeadingSlash(url)}>
            <img src={cardImgUrl} alt="Blog post card" />
          </CardLink>
          {cardImageAuthor && (
            <Author>
              <a
                href={`https://unsplash.com/${cardImageAuthor}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Photo by {cardImageAuthor}
              </a>
            </Author>
          )}
        </ImageCol>
        <ContentCol>
          <CardLink to={addLeadingSlash(url)}>
            <h2>{title}</h2>
          </CardLink>
          <DateSpan>{date}</DateSpan>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          {tags && tags.map(t => <span>{t}</span>)}
        </ContentCol>
      </Row>
    </Grid>
  </StyledCard>
);

const Author = styled.span`
  a {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
    line-height: 1.5rem;
    text-decoration: none;
  }

  line-height: 1.5rem;
  position: relative;
  float: right;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  top: -2.22rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.25);
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const StyledCard = styled.article`
  border-radius: 5px;
  min-height: 300px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ImageCol = styled(Col)`
  height: 200px;
  padding-left: 0;
  padding-right: 0;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

const ContentCol = styled(Col)`
  font-size: 1rem;
  padding: 1rem;
  padding-right: 2rem;
  padding-left: 1rem;

  h2,
  h3 {
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
export const DateSpan = styled.span`
  opacity: 0.6;
`;
export default Card;