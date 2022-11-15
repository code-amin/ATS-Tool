import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Text>ATS-Tool © All rights reserved 2022</Text>
      <Github href="https://github.com/code-amin/ATS-Tool">
        Contribute (OpenSource)
      </Github>
      <Text>
        Privacy* none of your data is stored on our servers, all your data remains yours.
      </Text>
      <Text>Donate ☕️</Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  bottom: 0;
  position: relative;
  width: 100%;
  display: flex;
  height: 70px;
  border-top: 2px solid gray;
`;

const Text = styled.div`
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 14px;
  padding: 20px;
`;

const Github = styled.a`
  bottom: 0;
  width: 100%;
  height: 50px;
  font-size: 14px;
  padding: 20px;
`;
