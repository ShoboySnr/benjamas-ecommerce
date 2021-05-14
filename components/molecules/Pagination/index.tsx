import React from 'react';
import ReactPaginate from 'react-paginate';
import { Button } from '~atoms/Button';
import ArrowLeft from '~atoms/Icons/ArrowLeft';
import ArrowRight from '~atoms/Icons/ArrowRight';
import { DIV } from './style';

const Pagination: React.FC<{
  numberOfPages: number;
  currentPage: number;
  onPageChange?: any;
}> = ({ numberOfPages, currentPage, onPageChange }, props) => (
  <DIV {...props}>
    <ReactPaginate
      pageRangeDisplayed={2}
      marginPagesDisplayed={10}
      pageCount={numberOfPages}
      activeClassName="active-class"
      containerClassName="pagination"
      nextLabel={(<ArrowRight />)}
      previousLabel={(<ArrowLeft />)}
      breakLabel="..."
      initialPage={currentPage - 1}
      onPageChange={onPageChange}
    />
  </DIV>
);

export function Paginate({
  firstPage,
  lastPage,
  onChangePage,
}: {
  firstPage: boolean;
  lastPage: boolean;
  onChangePage: (stage: 'prev' | 'next') => void;
}) {
  return (
    <div className="flex justify-center">
      <Button
        className={`text-black ${firstPage &&
          'cursor-not-allowed'}`}
        disabled={firstPage}
      >
        <ArrowLeft />
      </Button>
      <Button
        className={`text-black ${lastPage &&
          'cursor-not-allowed'}`}
        disabled={lastPage}
      >
        <ArrowRight />
      </Button>
    </div>
  );
}

export default Pagination;