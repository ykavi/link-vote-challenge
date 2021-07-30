import "./header.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import Text from "../../atoms/text";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Logo />
      <div className="header-text">
        <Text size="1.5em" weight={800} text="Link" />
        <Text size="1.5em" weight={300} text="VOTE" />
        <Text size="1.5em" weight={500} margin="0 0 0 5px" text="Challenge" />
      </div>
    </div>
  );
};

export default Header;
