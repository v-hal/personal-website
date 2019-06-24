import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Button, Typography } from '@smooth-ui/core-sc';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin';
import LogoGithub from 'react-ionicons/lib/LogoGithub';
import Mail from 'react-ionicons/lib/MdMail';
import { StaticQuery } from 'gatsby';

const LinkButton = Button.withComponent('a');

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
            linkedin
            twitter
            github
            email
            medium
          }
        }
      }
    `}
    render={result => (
      <StyledFooter>
        <Grid>
          <Row>
            <FooterCol xs={12}>
              <SocialMediaTitle variant="h4">Let's connect</SocialMediaTitle>
            </FooterCol>
            <FooterCol>
              <StyledLinkButton
                variant="light"
                href={result.site.siteMetadata.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoTwitter />
              </StyledLinkButton>
              <StyledLinkButton
                variant="light"
                href={result.site.siteMetadata.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoLinkedin />
              </StyledLinkButton>
              <StyledLinkButton
                variant="light"
                href={result.site.siteMetadata.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LogoGithub />
              </StyledLinkButton>
              <StyledLinkButton
                variant="light"
                href={`mailto:${result.site.siteMetadata.email}`}
              >
                <Mail />
              </StyledLinkButton>
            </FooterCol>
          </Row>
          <Row>
            <FooterCol>
              <Copy>© Ville Halminen {new Date().getFullYear()}</Copy>
            </FooterCol>
          </Row>
        </Grid>
      </StyledFooter>
    )}
  ></StaticQuery>
);

const StyledFooter = styled.footer`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  /*height: ${props => props.theme.footerHeight};*/
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.mainGray};
  }
`;

const StyledLinkButton = styled(LinkButton)`
  background-color: ${props => props.theme.$swatch_4};
  display: flex;
  margin-right: 1rem;
  &:hover {
    svg > path {
      fill: ${props => props.theme.accent1};
    }
  }
`;

const SocialMediaTitle = styled(Typography)`
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Copy = styled.span`
  margin-top: 2rem;
`;

const FooterCol = styled(Col)`
  display: flex;
  flex-wrap: wrap;
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
