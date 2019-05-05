import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

const StyledMain = styled.main``;

Main.propTypes = { children: PropTypes.node.isRequired };

Main.defaultProps = {};

export default Main;
