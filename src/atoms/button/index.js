import { StyledButton } from "./styles";

const Button = ({ action, value }) => {
  return <StyledButton onClick={action}>{value}</StyledButton>;
};

export default Button;
