import React from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";
import { BsCaretLeft } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";

const TOTAL_PAGES = 42;

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={
        <BsCaretLeft className="w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out text-white" />
      }
      nextLabel={
        <BsCaretRight className="w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out text-white"/>
      }
      breakLabel={"..."}
      breakClassName={"flex items-center justify-center px-[10px] text-black"}
      breakLinkClassName={"px-[11px] py-[8px]"}
      pageCount={TOTAL_PAGES}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageLinkClassName={"px-[11px] py-[8px]"}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      containerClassName={"font-montserrat font-medium flex list-none p-5 justify-center my-5 gap-2"}
      activeClassName={"border-2 bg-black text-black"}
      previousClassName={"flex justify-center items-center w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out"}
      nextClassName={"flex justify-center items-center w-8 h-8 cursor-pointer transition-colors duration-300 ease-in-out"}
      pageClassName={"flex justify-center items-center w-8 h-8 bg-transparent border-2 border-white cursor-pointer transition-colors duration-300 ease-in-out text-white hover:bg-white hover:text-black rounded-full"}
      disabledClassName={"cursor-not-allowed opacity-50"}
      forcePage={currentPage - 1}
    />
  );
};
