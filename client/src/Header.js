import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div``;

const Header = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <StyledApp>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Heading>ATS-Tool</Heading>
        {/* // <GlobalStyles /> */}
        {/* // <Header /> */}
        <Button onClick={themeToggler}>O</Button>
      </ThemeProvider>
    </StyledApp>
  );
};

export default Header;

const Button = styled.button``;
const Heading = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;
