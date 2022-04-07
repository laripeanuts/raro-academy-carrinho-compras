import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import { theme } from "./styles/theme";

import Home from "./pages/home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
