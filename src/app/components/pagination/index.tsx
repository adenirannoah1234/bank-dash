'use client';

import { Button, HStack, Icon, Text } from '@chakra-ui/react';

import { usePagination, DOTS } from './usePagination';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { RxCaretRight } from 'react-icons/rx';
import { RxCaretLeft } from 'react-icons/rx';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: {
  onPageChange: (number: number | string) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange ? paginationRange.length : 0) < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < (paginationRange ? paginationRange.length : 0))
      onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage - 1 > 0) onPageChange(currentPage - 1);
  };

  return (
    <HStack>
      <Button
        variant={'outline'}
        leftIcon={<FaChevronLeft size={20} />}
        onClick={onPrevious}
        color={'#1713f2ff'}
        fontSize={'md'}
        border={'none'}
      >
        Previous
      </Button>

      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <Icon
                as={HiOutlineDotsHorizontal}
                key={pageNumber}
                className="pagination-item dots"
              />
            );
          }

          // Render our Page Pills
          return (
            <Button
              key={pageNumber}
              //   className={classnames("pagination-item", {
              //     selected: pageNumber === currentPage,
              //   })}
              padding="1rem"
              display={'inline-flex'}
              alignContent={'center'}
              borderRadius={'lg'}
              onClick={() => onPageChange(pageNumber)}
              bgColor={pageNumber === currentPage ? '#1713f2ff' : 'transparent'}
              color={pageNumber === currentPage ? 'white' : '#666666'}
              variant="outline"
            >
              {pageNumber}
            </Button>
          );
        })}

      <Button
        variant={'outline'}
        rightIcon={<FaChevronRight size={20} />}
        onClick={onNext}
        color={'#1713f2ff'}
        fontSize={'small'}
        border={'none'}
      >
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
