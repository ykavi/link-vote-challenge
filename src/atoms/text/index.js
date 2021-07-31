import { StyledText } from "./styles.js";
import * as BsIcon from "react-icons/ai";

const Text = ({ size, weight, margin, text, iconName }) => {
  const Icon = BsIcon[iconName];
  return (
    <StyledText size={size} weight={weight} margin={margin}>
      {iconName && <Icon />}
      {text}
    </StyledText>
  );
};

export default Text;
