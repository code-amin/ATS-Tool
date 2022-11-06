import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const Header = () => {
  return <HeaderDiv>ATS-Tool</HeaderDiv>;
};

export default Header;

const Button = styled.button``;

const HeaderDiv = styled.div`
  border-bottom: 2px solid gray;
  height: 30px;
  text-align: center;
`;
