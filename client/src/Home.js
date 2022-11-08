import styled from "styled-components";

const Home = () => {
  return (
    <HomeDiv>
      <UserData>
        Your information
        <form>
          
          <input type="text"></input>
          <input type="file" name="document" className="form-input" />
          <button>Check</button>
        </form>
      </UserData>
      <CompanyData>Company information</CompanyData>
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  position: relative;
  height: calc(100vh - 120px);
`;

const UserData = styled.div`
  border-right: 2px solid lightgreen;
  height: calc(100vh - 120px);
  width: 50%;
  float: left;
  text-align: center;
`;

const CompanyData = styled.div`
  width: 50%;
  float: right;
  text-align: center;
`;
