import { useState } from "react";
import {
  ModalContainer,
  StyledContent,
  StyledTitle,
  StyledFooter,
  ContentWrapper,
} from "./styles";
import Text from "../../atoms/text";
import Button from "../../atoms/button";
import { FaTimes } from "react-icons/fa";

const Modal = ({ action, visibility }) => {
  return (
    <ModalContainer>
      <ContentWrapper>
        <StyledTitle>
          <Text text="Remove Link" />
          <FaTimes size={30} cursor="pointer" onClick={visibility} />
        </StyledTitle>
        <StyledContent>
          <Text text="Do you want to remove?" size="26px" />
        </StyledContent>
        <StyledFooter>
          <Button action={action} value="Ok" />
          <Button value="Cancel" action={visibility} />
        </StyledFooter>
      </ContentWrapper>
    </ModalContainer>
  );
};

export default Modal;
