import styled from "styled-components";

const StyledText = styled.p`
  font-size: ${(props) => (props.size ? props.size : "1.5em")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  margin: ${(props) => (props.margin ? props.margin : "0 0 0 0")};
  display: flex;
  align-items: center;
  line-height: 1;
`;

export { StyledText };
