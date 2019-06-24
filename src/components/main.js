import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

const StyledMain = styled.main`
  background-color: white;
  padding-left: 1rem;
  padding-right: 1rem;
`;

Main.propTypes = { children: PropTypes.node.isRequired };

Main.defaultProps = {};

export default Main;
