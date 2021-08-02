import { useState } from "react";
import IconText from "../atoms/iconText";
import ItemWrapper from "../atoms/itemWrapper";
import Text from "../atoms/text";
import Input from "../atoms/input";
import Button from "../atoms/button";
import { useHistory } from "react-router-dom";
import { getLocalStorageData, setLocalStorageData } from "../utils";
import ENUMS from "../enums";
import Toast from "../atoms/toast";

const AddLink = () => {
  const history = useHistory();
  const [title, setTitle] = useState(null);
  const [url, setUrl] = useState(null);
  const [saveStatus, setSaveStatus] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  const handleBtnClick = () => {
    if (!title?.trim() || !url?.trim()) return null;

    setToastMessage(title);
    const linkData = getLocalStorageData(ENUMS.localStorageKey) || [];
    const preData = {
      insertDate: Date.now(),
      title: title,
      url: url,
      point: 0,
    };
    linkData?.push(preData);
    const status = setLocalStorageData(ENUMS.localStorageKey, linkData);
    setSaveStatus(status);
  };

  const handleNameChange = (value) => {
    setTitle(value);
  };

  const handleUrlChange = (value) => {
    setUrl(value);
  };

  return (
    <div className="content">
      <Toast isVisibility={saveStatus} message={toastMessage} />
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
        <Input
          placeholder="e.g. Alphabet"
          label="Link Name:"
          action={handleNameChange}
        />
        <Input
          placeholder="e.g. http://abc.xyz"
          label="Link URL:"
          action={handleUrlChange}
        />
      </ItemWrapper>

      <Button action={handleBtnClick} value="ADD" />
    </div>
  );
};
export default AddLink;
