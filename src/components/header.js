import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Grid, Row, Col, Typography, Breakpoint } from '@smooth-ui/core-sc';
import styleVariables from '../styles/variables';
const logo = require('../images/logo2.svg');

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Grid>
      <Row>
        <HeaderCol xs={2} sm={8} md={9} left={true}>
          <Typography variant="h1">
            <MenuLink to="/">
              <LogoAndTitle>
                <Logo src={logo} />
                <Breakpoint up="sm">{siteTitle}</Breakpoint>
              </LogoAndTitle>
            </MenuLink>
          </Typography>
        </HeaderCol>
        <HeaderCol>
          <MenuLink to="/blog">Blog</MenuLink>
        </HeaderCol>
        <HeaderCol>
          <MenuLink to="/cv">CV</MenuLink>
        </HeaderCol>
        <HeaderCol>
          <MenuLink to="/about">About</MenuLink>
        </HeaderCol>
      </Row>
    </Grid>
  </StyledHeader>
);

const StyledHeader = styled.header`
  /* background-color: ${props => props.theme.$swatch_4}; */
  font-family: ${styleVariables.headingFontFamily};
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  height: ${props => props.theme.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-weight: 900;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 0;
  }
  a {
    transition: color 0.2s linear;
    text-decoration: none;
    font-weight: 600;

    svg > path {
      transition: fill 0.2s linear;
    }

    &:hover {
      color: ${props => props.theme.accent1};
      svg > path {
        fill: ${props => props.theme.accent1} !important;
      }
    }
  }
`;

const MenuLink = styled(Link)`
  color: ${props => props.theme.mainGray};
  text-decoration: none;
  &:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const Logo = styled(SVG)`
  margin-top: 0.4rem;
  margin-right: 0.6rem;
  svg {
    width: 2rem;
  }
`;

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  ${props =>
    props.left ||
    `
    justify-content: center;
  `};
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
