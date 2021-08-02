import { StyledText, StyledSpan } from "./styles.js";
import * as TiIcon from "react-icons/ti";

const IconText = ({ size, weight, margin, text, color, iconName, onClick }) => {
  const Icon = TiIcon[iconName];
  return (
    <StyledText
      size={size}
      weight={weight}
      margin={margin}
      color={color}
      onClick={onClick}
    >
      {iconName && (
        <StyledSpan>
          <Icon />
        </StyledSpan>
      )}
      {text}
    </StyledText>
  );
};

export default IconText;
