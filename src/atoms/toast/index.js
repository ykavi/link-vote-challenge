import { useState, useEffect } from "react";
import { StyledContainer } from "./styles";

const Toast = ({ isVisibility, message }) => {
  const [visibility, setVisibility] = useState(null);

  useEffect(() => {
    setVisibility(isVisibility);
    setTimeout(() => {
      setVisibility(false);
    }, 3000);
  }, [isVisibility]);

  return (
    <StyledContainer isVisibility={visibility}>
      <p>
        <b>{message && message.toUpperCase()}</b> added
      </p>
    </StyledContainer>
  );
};

export default Toast;
