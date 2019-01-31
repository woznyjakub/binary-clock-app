import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import "./css/reset.css";
import { theme } from "./css/theme";

import { Heading } from "./components";

import { Description } from "./containers";
import { Clock } from "./containers";

const StyledMainContainer = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  padding: 1.5rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.darkblue};
  color: ${({ theme }) => theme.colors.lightgrey};
`;
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledMainContainer>
          <Heading>Binary Clock</Heading>
          <Clock />
          <Description />
        </StyledMainContainer>
      </ThemeProvider>
    );
  }
}

export default App;
