import React from "react";
import { ThemeProvider } from "styled-components";
import * as patientsData from "./data/patients.json";
import { Dashboard } from "./modules/dashboard/dashboard";
import { GlobalStyle } from "./utils/global-style";
import theme from "./utils/theme";

const App = () => {
  const { default: data } = JSON.parse(JSON.stringify(patientsData));

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Dashboard data={data} />
      </ThemeProvider>
    </>
  );
};

App.displayName = "App";

export default App;
