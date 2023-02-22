import styled from "styled-components";
import { RiFileCopyLine } from "react-icons/ri";
 
const Home = () => {
  const handleCopy = () => {
    console.log("copied");
    // navigator.clipboard.writeText(Input.value)
  };

  const handleCheck = (e) => {

    if (document.getElementById("file").value === "") {
      console.log("select file",e);
      

      
    }
  };
  const isDisabled = () => {
    return false;
  };

  return (
    <HomeDiv>
      <UserData>
        Your information{" "}
        <form>
          <Input placeholder="paste your cv here" />
          <h5>or</h5> <h5>Upload resume </h5>
          <input
            id="file"
            type="file"
            name="document"
            className="form-input"
            accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          {/* If no file selected => disabled, if nothing pasted in textbox, error also in right section */}
          <button type="submit" onClick={handleCheck}>
            Check
          </button>
        </form>
      </UserData>
      <CompanyData>
        Job posting information
        <input placeholder="role url"></input>
        or
        <Input placeholder="paste job posting or keywords here" />
      </CompanyData>
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

const UserData = styled.div`
  border-right: 2px solid lightgreen;
  height: calc(100vh - 120px);
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CompanyData = styled.div`
  width: 50%;
  float: right;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Input = styled.textarea`
  width: 98%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  // TODO: background color must match dark mode (so black and text white)
  background-color: #f8f8f8;
  font-size: 14px;
  resize: vertical;
`
