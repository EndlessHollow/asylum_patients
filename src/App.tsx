import React from "react";
import { Provider } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { Dashboard } from "./modules/dashboard/dashboard";
import { store } from "./redux/store";
import { GlobalStyle } from "./utils/global-style";
import theme from "./utils/theme";

const AppContainer = styled.div`
  margin: ${({ theme }) => `${theme.spacing[4]}`};
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Dashboard />
        </AppContainer>
      </ThemeProvider>
    </Provider>
  );
};

App.displayName = "App";

export default App;
