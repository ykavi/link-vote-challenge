import { useContext, useEffect, useState } from "react";
import SubmitLink from "../molecules/submitLink";
import Separater from "../atoms/separater";
import SelectBox from "../molecules/selectBox";
import PointCard from "../molecules/pointCard";
import Paginate from "../molecules/paginate";
import options from "../mock-data/options.json";
import { getLocalStorageData } from "../utils";
import { Context } from "../context/store";
import ENUMS from "../enums";

const Home = () => {
  const [linkData, setLinkData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [state] = useContext(Context);

  useEffect(() => {
    setLinkData(getLocalStorageData(ENUMS.localStorageKey));
  }, [state]);

  const changePage = (currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <>
      <div className="content">
        <SubmitLink />
        <Separater />
        <SelectBox options={options} />
        <PointCard
          data={linkData.slice((currentPage - 1) * 5, currentPage * 5)}
        />
        <Paginate
          pageSize={linkData.length}
          action={changePage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Home;
