import "./point-card.css";
import { useContext } from "react";
import PointBox from "../../atoms/pointBox";
import Text from "../../atoms/text";
import IconText from "../../atoms/iconText";
import { RiDeleteBinLine } from "react-icons/ri";
import { setLocalStorageData } from "../../utils";
import ENUMS from "../../enums";
import { Context } from "../../context/store";

const PointCard = ({ data }) => {
  const [state, dispatch] = useContext(Context);
  const deleteClickHandle = (itemId) => {
    const deleteItem = state.link.find((item) => {
      return item.insertDate === itemId;
    });
    const itemIndex = state.link.indexOf(deleteItem);
    state.link.splice(itemIndex, 1);
    setLocalStorageData(ENUMS.localStorageKey, state.link);
    dispatch({ type: "DELETE_LINK", payload: state.link });
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
              onClick={() => deleteClickHandle(item?.insertDate)}
            >
              <RiDeleteBinLine />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PointCard;
