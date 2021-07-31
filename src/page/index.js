import Header from "../molecules/header";
import SubmitLink from "../molecules/submitLink";
import Separater from "../atoms/separater";
import SelectBox from "../molecules/selectBox";
import PointCard from "../molecules/pointCard";
import options from "../mock-data/options.json";

const LinkVote = () => {
  return (
    <>
      <Header />
      <div className="content">
        <SubmitLink />
        <Separater />
        <SelectBox options={options} />
        <PointCard />
      </div>
    </>
  );
};

export default LinkVote;
