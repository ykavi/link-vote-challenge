import "./submit-link.css";
import PointBox from "../../atoms/pointBox";
import Text from "../../atoms/text";

const SubmitLink = () => {
  return (
    <div className="submit-wrapper">
      <PointBox title="+" />
      <Text text="SUBMIT A LINK" margin="auto" weight={500} size="2em" />
    </div>
  );
};

export default SubmitLink;
