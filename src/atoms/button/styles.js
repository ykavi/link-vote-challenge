import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 15px;
  width: 150px;
  border-radius: 26px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  align-self: flex-end;

  &:hover {
    background-color: #333333;
  }
`;

export { StyledButton };
