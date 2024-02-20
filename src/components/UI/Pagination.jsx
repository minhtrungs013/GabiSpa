import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - maxVisiblePages / 3 && i <= currentPage + maxVisiblePages / 3)
            ) {
                pageNumbers.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`text-base mx-[2px] px-3 py-1 ${currentPage === i ? 'bg-black text-white' : 'bg-white text-gray-500'
                            } hover:bg-blue-100 hover:text-gray-700  rounded-lg min-w-[40px]`}
                    >
                        {i}
                    </button>
                );
            } else if (
                (i === 2 && currentPage - maxVisiblePages / 3 > 2) ||
                (i === totalPages - 1 && currentPage + maxVisiblePages / 3 < totalPages - 1)
            ) {
                pageNumbers.push(
                    <button
                        key={`ellipsis-${i}`} className="inline-block  text-gray-700 text-base mx-[2px] px-3 py-1 ">
                        ...
                    </button>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={` ${currentPage === 1 && '!text-gray-500 '} mr-2 px-3 py-1 bg-white text-gray-700 hover:bg-blue-100 hover:text-gray-700  rounded-lg `}
            >
                <FontAwesomeIcon icon={faArrowLeft} className=" h-4 w-4  " /> Prev
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={` ${currentPage === totalPages && '!text-gray-500 '} ml-2 px-3 py-1  bg-white text-gray-700 hover:bg-blue-100 hover:text-gray-700 rounded-lg `}
            >
                Next   <FontAwesomeIcon icon={faArrowRight} className=" h-4 w-4  " />
            </button>
        </div>
    );
};

export default Pagination;
