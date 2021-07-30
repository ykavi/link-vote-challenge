import { StyledText } from "./styles.js";

const Text = ({ size, weight, margin, text }) => {
  return (
    <StyledText size={size} weight={weight} margin={margin}>
      {text}
    </StyledText>
  );
};

export default Text;
