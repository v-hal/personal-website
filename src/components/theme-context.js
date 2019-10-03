import React from 'react';
const themes = {
  light: 'light',
  dark: 'dark',
};

export const ThemeContext = React.createContext(themes.light);
// https://reactjs.org/docs/context.html
