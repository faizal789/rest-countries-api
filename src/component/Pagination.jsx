import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const displayRange = 5;

  const startPage = Math.max(1, currentPage - Math.floor(displayRange / 2));
  const endPage = Math.min(totalPages, startPage + displayRange - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-end justify-center mt-12">
      <div className="flex items-center gap-4">
        <a href="#">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
            className=" dark:bg-dark-mode-elements rounded-md px-4 py-2 bg-white shadow-lg disabled:opacity-70"
          >
            <p>Previous</p>
          </button>
        </a>
        {pageNumbers.map((number) => (
          <a href="#" key={number} onClick={() => onPageChange(number)}>
            <p
              className={
                currentPage === number
                  ? "dark:bg-white dark:text-light-mode-text bg-dark-mode-bg px-4 py-2 rounded-sm text-white"
                  : "cursor-pointer"
              }
            >
              {number}
            </p>
          </a>
        ))}
        <a href="#">
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages ? true : false}
            className=" dark:bg-dark-mode-elements rounded-md px-4 py-2 bg-white shadow-lg disabled:opacity-70"
          >
            <p>Next</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Pagination;
