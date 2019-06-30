import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

const StyledMain = styled.main`
  box-sizing: border-box;
  background-color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  .sui-grid {
    box-sizing: border-box;
  }
`;

Main.propTypes = { children: PropTypes.node.isRequired };

Main.defaultProps = {};

export default Main;
