import { StyledText, StyledSpan } from "./styles.js";
import * as TiIcon from "react-icons/ti";

const VoteText = ({ size, weight, margin, text, iconName }) => {
  const Icon = TiIcon[iconName];
  return (
    <StyledText size={size} weight={weight} margin={margin}>
      {iconName && (
        <StyledSpan>
          <Icon />
        </StyledSpan>
      )}
      {text}
    </StyledText>
  );
};

export default VoteText;
