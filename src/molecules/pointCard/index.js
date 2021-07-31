import "./point-card.css";
import PointBox from "../../atoms/pointBox";
import Text from "../../atoms/text";
import VoteText from "../../atoms/voteText";

const PointCard = () => {
  return (
    <div className="list-container">
      <div className="list-item">
        <PointBox title="6" text="POINTS" />

        <div className="item-content">
          <div>
            <Text size="2em" weight={600} text="Hacker News" />
            <Text size="1.1em" weight={300} text="(https://www.youtube.com/)" />
          </div>

          <div className="item-vote">
            <VoteText
              size="1em"
              weight={500}
              text="Up Vote"
              iconName="TiArrowUpThick"
            />
            <VoteText
              size="1em"
              weight={500}
              text="Down Vote"
              iconName="TiArrowDownThick"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointCard;
