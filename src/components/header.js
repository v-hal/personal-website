import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Grid, Row, Col, Typography, Breakpoint } from '@smooth-ui/core-sc';
const logo = require('../images/logo2.svg');

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Grid>
      <Row>
        <HeaderCol xs={2} sm={8} md={9} left>
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
          <MenuLink to="/">Posts</MenuLink>
        </HeaderCol>
        <HeaderCol>
          <MenuLink to="/cv">CV</MenuLink>
        </HeaderCol>
        <HeaderCol>
          <MenuLink to="/">About</MenuLink>
        </HeaderCol>
      </Row>
    </Grid>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background-color: ${props => props.theme.$swatch_4};
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.1);
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
    text-decoration: none;
    font-weight: 800;

    &:hover {
      color: ${props => props.theme.accent1};
      svg > path {
        fill: ${props => props.theme.accent1} !important;
      }
    }
  }
`;

const MenuLink = styled(Link)`
  color: #585858;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
  `}
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
