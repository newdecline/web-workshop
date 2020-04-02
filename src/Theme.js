import {ThemeProvider} from "styled-components";
import React from "react";

const theme = {
  mainColor: '#435993',
  breakPoints: {
    sm: {
      vw: '320px',
      container: '100%'
    },
    md: {
      vw: '768px',
      container: '768px'
    },
    xl: {
      vw: '1920px',
    }
  }
};

export const Theme = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);