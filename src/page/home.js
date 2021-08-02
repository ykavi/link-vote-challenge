import SubmitLink from "../molecules/submitLink";
import Separater from "../atoms/separater";
import SelectBox from "../molecules/selectBox";
import PointCard from "../molecules/pointCard";
import options from "../mock-data/options.json";

const Home = () => {
  return (
    <>
      <div className="content">
        <SubmitLink />
        <Separater />
        <SelectBox options={options} />
        <PointCard />
      </div>
    </>
  );
};

export default Home;
