// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <StyledApp>
          <GlobalStyles />
          <Header />
          <Button onClick={themeToggler}>🌗</Button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<h1>404: Oops!</h1>} />
          </Routes>
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

const Button = styled.button`
  width: 50px;
  right: 10px;
  top: 10px;
  position: absolute;
`;

const StyledApp = styled.div``;
