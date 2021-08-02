import ItemWrapper from "../itemWrapper";
import Text from "../text";
import "./input.css";

const Input = ({ placeholder, label }) => {
  return (
    <ItemWrapper>
      <Text text={label} />
      <input className="custom-input" placeholder={placeholder} />
    </ItemWrapper>
  );
};

export default Input;
