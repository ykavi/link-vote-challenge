import Text from "../text";
import { StyledContainer } from "./styles";
import * as TiIcon from "react-icons/fa";

const PointBox = ({ title, text, iconName, onClick }) => {
  const Icon = TiIcon[iconName];
  return (
    <StyledContainer onClick={onClick}>
      {iconName && <Icon size={50} />}
      <Text size="4em" weight={600} text={title} />
      {text && (
        <Text size="1.5em" weight={400} text={text} margin="0 0 4px 0px" />
      )}
    </StyledContainer>
  );
};

export default PointBox;
