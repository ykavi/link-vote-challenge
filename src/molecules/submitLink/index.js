import "./submit-link.css";
import PointBox from "../../atoms/pointBox";
import Text from "../../atoms/text";
import { useHistory } from "react-router-dom";

const SubmitLink = () => {
  const history = useHistory();
  return (
    <div className="submit-wrapper">
      <PointBox
        iconName="FaPlus"
        onClick={() => history.push("/submit-link")}
      />
      <Text text="SUBMIT A LINK" margin="auto" weight={500} size="2em" />
    </div>
  );
};

export default SubmitLink;
