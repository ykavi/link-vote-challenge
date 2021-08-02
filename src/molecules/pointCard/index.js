import "./point-card.css";
import { useContext, useState } from "react";
import PointBox from "../../atoms/pointBox";
import Text from "../../atoms/text";
import IconText from "../../atoms/iconText";
import { RiDeleteBinLine } from "react-icons/ri";
import { getLocalStorageData, setLocalStorageData } from "../../utils";
import ENUMS from "../../enums";
import { Context } from "../../context/store";
import Modal from "../modal";

const PointCard = ({ data }) => {
  const [, dispatch] = useContext(Context);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const deleteIconClickHandle = (removedItemId) => {
    setDeleteItemId(removedItemId);
    setModalVisible(true);
  };

  const changevisibility = () => {
    setModalVisible(false);
  };

  const deleteLinkItem = () => {
    const linkData = getLocalStorageData(ENUMS.localStorageKey) || [];
    setModalVisible(false);
    const deleteItem = linkData.find((item) => {
      return item.insertDate === deleteItemId;
    });
    const itemIndex = linkData.indexOf(deleteItem);
    linkData.splice(itemIndex, 1);
    setLocalStorageData(ENUMS.localStorageKey, linkData);
    dispatch({ type: "DELETE_LINK", payload: linkData });
  };

  return (
    <div className="list-container">
      {data?.map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <PointBox title={item?.point} text="POINTS" />

            <div className="item-content">
              <div>
                <Text size="2em" weight={600} text={item?.title} />
                <Text
                  size="1.1em"
                  weight={300}
                  text={item?.url}
                  margin="5px 0 0 0"
                />
              </div>

              <div className="item-vote">
                <IconText
                  size="1em"
                  weight={500}
                  text="Up Vote"
                  iconName="TiArrowUpThick"
                />
                <IconText
                  size="1em"
                  weight={500}
                  text="Down Vote"
                  iconName="TiArrowDownThick"
                  margin="0 20px"
                />
              </div>
            </div>

            <div
              className="delete-icon"
              onClick={() => deleteIconClickHandle(item?.insertDate)}
            >
              <RiDeleteBinLine />
            </div>
          </div>
        );
      })}
      {modalVisible && (
        <Modal visibility={changevisibility} action={deleteLinkItem} />
      )}
    </div>
  );
};

export default PointCard;
