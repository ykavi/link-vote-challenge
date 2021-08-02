import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #d1fae5;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: solid 1px #10b981;
  cursor: pointer;
  color: #10b981;
  font-size: 24px;
  opacity: ${(props) => (props.isVisibility ? "1" : "0")};
  transition: visibility 0s, opacity 0.2s linear;
`;

export { StyledContainer };
