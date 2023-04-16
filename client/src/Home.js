import styled from "styled-components";
import { RiFileCopyLine } from "react-icons/ri";
import UserInfo from "./UserInfo";
import CompanyInfo from "./CompanyInfo";

const Home = () => {
  const handleCopy = () => {
    console.log("copied");
    // navigator.clipboard.writeText(Input.value)
  };

  const isDisabled = () => {
    return false;
  };

  return (
    <HomeDiv>
      <UserInfo />
      <CompanyInfo />
      <RiFileCopyLine onClick={handleCopy} />
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  position: relative;
  height: calc(100vh - 120px);
  display: flex;
`;
