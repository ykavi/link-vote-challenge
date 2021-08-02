import IconText from "../atoms/iconText";
import ItemWrapper from "../atoms/itemWrapper";
import Text from "../atoms/text";
import Input from "../atoms/input";
import Button from "../atoms/button";
import { useHistory } from "react-router-dom";

const AddLink = () => {
  const history = useHistory();
  return (
    <div className="content">
      <ItemWrapper margin="20px 0 40px 0" width="150px">
        <IconText
          size="1.3em"
          weight={500}
          text="Return to list"
          iconName="TiArrowLeftThick"
          color="#000000"
          onClick={() => history.push("/")}
        />
      </ItemWrapper>
      <Text size="2em" weight={700} text="Add New Link" />

      <ItemWrapper margin="30px 0">
        <Input placeholder="e.g. Alphabet" label="Link Name:" />
        <Input placeholder="e.g. http://abc.xyz" label="Link URL:" />
      </ItemWrapper>

      <Button />
    </div>
  );
};
export default AddLink;
