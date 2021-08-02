import ItemWrapper from "../itemWrapper";
import Text from "../text";
import "./input.css";

const Input = ({ placeholder, label, action }) => {
  return (
    <ItemWrapper>
      <Text text={label} />
      <input
        className="custom-input"
        placeholder={placeholder}
        onChange={(e) => action(e.target.value)}
      />
    </ItemWrapper>
  );
};

export default Input;
