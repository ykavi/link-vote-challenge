import { useState } from "react";
import Pagination from "rc-pagination";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./paginate.css";

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      onChange={(p) => {
        setCurrentPage(p);
        console.log("onChange", p);
      }}
      current={currentPage}
      total={25}
      pageSize={5}
      nextIcon={() => <HiChevronRight />}
      prevIcon={() => <HiChevronLeft />}
      showTitle={false}
    />
  );
};

export default Paginate;
