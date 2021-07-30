import { StyledText } from "./styles.js";

const Text = ({ size, weight, margin, text }) => {
  console.log(size);
  return (
    <StyledText size={size} weight={weight} margin={margin}>
      {text}
    </StyledText>
  );
};

export default Text;
