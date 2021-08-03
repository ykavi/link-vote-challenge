import Pagination from "rc-pagination";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./paginate.css";

const Paginate = ({ pageSize, action, currentPage }) => {
  return (
    <Pagination
      onChange={action}
      current={currentPage}
      total={pageSize}
      pageSize={5}
      nextIcon={() => <HiChevronRight />}
      prevIcon={() => <HiChevronLeft />}
      showTitle={false}
    />
  );
};

export default Paginate;
