import { StyledButton } from "./styles";

const Button = ({ action }) => {
  return <StyledButton onClick={action}>ADD</StyledButton>;
};

export default Button;
