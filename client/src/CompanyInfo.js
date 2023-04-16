import styled from "styled-components";

const CompanyInfo = () => {
  return (
    <CompanyInfoWrapper>
      Job posting information
      <input placeholder="role url"></input>
      or
      <Input placeholder="paste job posting or keywords here" />
    </CompanyInfoWrapper>
  );
};
export default CompanyInfo;

const CompanyInfoWrapper = styled.div`
  border-right: 2px solid lightgreen;
  height: calc(100vh - 120px);
  width: 50%;
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
`;
