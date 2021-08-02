import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: ${(props) => (props.size ? props.size : "1em")};
  color: #ffffff;
  padding: 10px;
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
`;

const ContentWrapper = styled.div`
  background: #ffffff;
  width: 35%;
  height: 200px;
`;

export {
  ModalContainer,
  StyledTitle,
  StyledContent,
  StyledFooter,
  ContentWrapper,
};
