import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Button } from '@smooth-ui/core-sc';
import Layout from '../components/layout';
import SEO from '../components/seo';
import cvImage from '../images/vhal.jpg';
import futuriceLogo from '../images/Futurice_Logo_Black.png';
import hiqLogo from '../images/HiQ_Logo_Black.jpg';
import kehatietoLogo from '../images/Kehatieto_Logo_Black.png';
import lutLogo from '../images/LUT_Logo_Black_.png';
import hhLogo from '../images/Haaga-Helia_Logo_Black_.png';
import tentimesLogo from '../images/Tentimes_Logo.png';

const CV = () => (
  <Layout>
    <SEO
      title="Ville Halminen - Curriculum Vitae"
      description="Ville Halminen - Sofware Developer - Curriculum Vitae"
    />
    <StyledCV className="cv">
      <Grid>
        <Row>
          <Col>
            <h1>Curriculum Vitae</h1>
            <div className="content">
              <ul className="no-style-list">
                <li>Ville Halminen</li>
                <li>Software Developer</li>
                <li>Helsinki, Finland</li>
                <li>ville.halminen@gmail.com</li>
              </ul>
              <img src={cvImage} className="cv-image" alt="Ville" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>About me</h2>
            <div className="content">
              <p>
                I'm a software developer and a tech guy specialized in full
                stack web development and tech advisory. I consider myself tech
                agnostic but lately I've been working with node.js and Scala on
                the back end and React front ends. I also have several years of
                experience on the .NET stack.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Experience</h2>
            <div className="content">
              <p>
                I have roughly {new Date().getFullYear() - 2012} years of
                experience with software projects as a professional. My areas of
                expertise are web development and system integrations as well as
                solution architecture. In addition to technical roles, I've also
                been involved in sales, account management, and project
                management.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="cv-item" style={{ marginTop: 0 }}>
          <Col className="logo" xs="auto">
            <a
              href="https://www.tentimesagency.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo"
                src={tentimesLogo}
                alt="Tentimes logo"
                style={{ width: 'initial', height: '50px' }}
              />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Senior Software Developer</li>
              <li>Tentimes</li>
              <li className="small">October 2018 - Present</li>
            </ul>
          </Col>
        </Row>
        <Row className="cv-item">
          <Col className="logo" xs="auto">
            <a
              href="https://www.futurice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src={futuriceLogo} alt="Futurice logo" />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Tech Advisor &amp; Business Manager</li>
              <li>Futurice</li>
              <li className="small">August 2017 - October 2018</li>
            </ul>
          </Col>
        </Row>
        <Row className="cv-item">
          <Col className="logo" xs="auto">
            <a
              href="https://www.futurice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src={futuriceLogo} alt="Futurice logo" />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Software Developer</li>
              <li>Futurice</li>
              <li className="small">June 2016 - August 2017</li>
            </ul>
          </Col>
        </Row>
        <Row className="cv-item">
          <Col className="logo" xs="auto">
            <a
              href="https://www.hiq.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src={hiqLogo} alt="HiQ logo" />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Customer Lead &amp; Integration Consultant</li>
              <li>HiQ Finland</li>
              <li className="small">January 2015 - June 2016</li>
            </ul>
          </Col>
        </Row>
        <Row className="cv-item">
          <Col className="logo" xs="auto">
            <a
              href="https://www.hiq.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src={hiqLogo} alt="HiQ logo" />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Software Engineer</li>
              <li>HiQ Finland</li>
              <li className="small">July 2013 - December 2014</li>
            </ul>
          </Col>
        </Row>
        <Row className="cv-item">
          <Col className="logo" xs="auto">
            <a
              href="https://www.kehatieto.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="logo" src={kehatietoLogo} alt="Kehätieto logo" />
            </a>
          </Col>
          <Col className="details">
            <ul>
              <li>Application Developer</li>
              <li>Kehätieto</li>
              <li className="small">Sep 2012 – Jul 2013</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: '2rem' }}>
            <h2>Education</h2>
            <div className="content">
              <div className="cv-item education">
                <div className="logo">
                  <a
                    href="https://www.lut.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo"
                      src={lutLogo}
                      style={{ width: 'initial', height: '50px' }}
                      alt="Lappeenranta University of Technology logo"
                    />
                  </a>
                </div>
                <div className="details">
                  <ul>
                    <li>Lappeenranta University of Technology</li>
                    <li>
                      Master of Science in Economics, Knowledge Management and
                      Leadership
                    </li>
                    <li className="small">2015 - 2019 (expected)</li>
                  </ul>
                </div>
              </div>
              <div className="cv-item education">
                <div className="logo">
                  <a
                    href="https://www.haaga-helia.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="logo"
                      src={hhLogo}
                      alt="Haaga-Helia logo"
                      style={{ width: 'initial', height: '50px' }}
                    />
                  </a>
                </div>
                <div className="details">
                  <ul>
                    <li>Haaga-Helia University of Applied Sciences</li>
                    <li>
                      Bachelor of Business Administration, Business Information
                      Technology
                    </li>
                    <li className="small">2010 – 2013</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="technologies">
              <h2>Technologies</h2>

              <h4>Front end</h4>
              <div className="content buttons">
                <Button variant="light" as="span">
                  HTML &amp; CSS &amp; SCSS
                </Button>
                <Button variant="light" as="span">
                  JavaScript &amp; TypeScript
                </Button>
                <Button variant="light" as="span">
                  React
                </Button>
                <Button variant="light" as="span">
                  Angular
                </Button>
                <Button variant="light" as="span">
                  Webpack
                </Button>
              </div>

              <h4>Back end</h4>
              <div className="content buttons">
                <Button variant="light" as="span">
                  Node.js
                </Button>
                <Button variant="light" as="span">
                  C#, ASP.NET
                </Button>
                <Button variant="light" as="span">
                  Scala
                </Button>
                <Button variant="light" as="span">
                  Microservices
                </Button>
                <Button variant="light" as="span">
                  Contentful
                </Button>
                <Button variant="light" as="span">
                  Episerver
                </Button>
                <Button variant="light" as="span">
                  PostgreSQL
                </Button>
                <Button variant="light" as="span">
                  MS SQL Server
                </Button>
                <Button variant="light" as="span">
                  MongoDB
                </Button>
                <Button variant="light" as="span">
                  Redis
                </Button>
              </div>

              <h4>Infra &amp; Devops</h4>
              <div className="content buttons">
                <Button variant="light" as="span">
                  Heroku
                </Button>
                <Button variant="light" as="span">
                  AWS
                </Button>
                <Button variant="light" as="span">
                  Azure
                </Button>
                <Button variant="light" as="span">
                  Travis CI
                </Button>
                <Button variant="light" as="span">
                  Jenkins
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </StyledCV>
  </Layout>
);

export const StyledCV = styled.div`
  h2 {
    font-size: 1.8rem;
  }

  .cv-item {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: 3rem;
  }

  .cv-image {
    width: 100%;
    max-width: 250px;
  }

  .content {
    /* margin-left: 3rem; */
    margin-bottom: 2rem;
  }

  .buttons {
    span {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      cursor: initial;
    }
  }

  .details {
    float: left;
    li {
      list-style: none;
      padding: 0;
    }
    ul {
      margin: 0;
    }
  }

  .no-style-list {
    padding: 0;
    li {
      list-style: none;
      padding: 0;
    }
  }

  .cv-item {
    display: flex;
    align-items: center;
  }

  .cv-item .logo {
    width: 100px;
    img {
      width: 90px;
    }
    float: left;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s ease-in-out;
  }

  .cv-item:hover .logo {
    opacity: 0.95;
    transition: opacity 0.2s ease-in-out;
    -moz-transition: opacity 0.2s ease-in-out;
    -webkit-transition: opacity 0.2s ease-in-out;
  }

  .education .logo {
    width: 100px;
  }

  .details .small {
    font-size: 75%;
  }

  .technologies {
    h4 {
      text-transform: none;
      letter-spacing: normal;
      font-size: 0.9em;
    }
    h2 {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export default CV;
