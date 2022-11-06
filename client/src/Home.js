import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      <form>
        <input></input>
        <input type="file" name="document" className="form-input" />
        <button>Check</button>
      </form>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  position: relative;
  min-height: calc(100vh - 120px);
  color: #8758ff;
  padding: 3px;
`;
