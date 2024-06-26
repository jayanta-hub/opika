import React, { memo } from "react";
import { Box, CustomButton } from "../../index.jsx";
import "./pagination.css";
const Pagination = ({
  onPreviousClick,
  onNextClick,
  onPageActive,
  pageNumber = 1,
  pageSize = 10,
  pgBtnCount = 5,
}) => {
  const pageNumbers = [];

  /*
   * This is calculating the starting page number for the pagination component based on the current
   * page, total number of pages, and the maximum number of page numbers to show.
   */
  const startPage = Math.max(
    Math.min(
      pageNumber - Math.floor(pgBtnCount / 2),
      pageSize - pgBtnCount + 1
    ),
    1
  );

  /*
   * This is calculating the end page number for the pagination component.
   */
  const endPage = Math.min(startPage + pgBtnCount - 1, pageSize);

  /**
   * The `for` loop in the code snippet is iterating over a range of page numbers starting from
   * `startPage` to `endPage`. For each page number within this range, a `CustomButton` component is
   * created and added to the `pageNumbers` array.
   */

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <CustomButton
        key={i}
        title={i}
        className={`pg-btn ${
          pageNumber === i ? "pg-active-btn" : "pg-active-btn-color"
        }`}
        onClick={() => onPageActive(i)}
      />
    );
  }

  if (pageSize > pgBtnCount + 2) {
    // Add ellipsis for hidden pages in the middle
    if (startPage > 1) {
      pageNumbers.unshift(
        <span key="before" className="span">
          ...
        </span>
      );
    }
    if (endPage < pageSize) {
      pageNumbers.push(
        <span key="after" className="span">
          ...
        </span>
      );
    }
  }
  /**
   * Renders pagination controls for navigating between pages.
   *
   * @return {JSX.Element} The pagination controls JSX element.
   */
  const renderPaginationControls = () => (
    <Box className="flex justify-end items-center w-full">
      <CustomButton
        title="Previous"
        onClick={onPreviousClick}
        className={`next-prev-btn ${
          pageNumber === 1 ? "disabled-btn" : "pg-active-btn-color hover-btn"
        }`}
      />
      {pageNumbers}
      <CustomButton
        title="Next"
        onClick={onNextClick}
        className={`next-prev-btn ${
          pageNumber === pageSize || pageSize === 0
            ? "disabled-btn"
            : "pg-active-btn-color hover-btn"
        }`}
      />
    </Box>
  );
  return <>{renderPaginationControls()}</>;
};

export default memo(Pagination);
