import Text from "../text";
import { StyledContainer } from "./styles";

const PointBox = ({ title, text, onClick }) => {
  return (
    <StyledContainer onClick={() => (onClick ? alert(2) : null)}>
      <Text size="4em" weight={600} text={title} />
      {text && <Text size="1.5em" weight={400} text={text} />}
    </StyledContainer>
  );
};

export default PointBox;
