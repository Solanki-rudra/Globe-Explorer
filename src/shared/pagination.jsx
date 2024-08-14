import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxVisiblePages = 4; 

  const getPages = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pages.push(1); 
      if (startPage > 2) {
        pages.push('...'); 
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('...'); 
      }
      pages.push(totalPages); 
    }

    return pages;
  };

  return (
    <div className='flex flex-wrap justify-center w-screen'>
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        className='sm:w-10 w-7 cursor-pointer sm:text-lg text-sm rounded mr-1 sm:mx-1 sm:h-10 h-7 border-2 bg-gray-700 text-white border-black'
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {getPages().map((page, index) =>
        page === '...' ? (
          <span key={index} className="sm:w-10 w-7 sm:text-lg text-sm rounded sm:mx-1 sm:h-10 h-7 flex justify-center items-center">
            {page}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`sm:w-10 w-7 sm:text-lg text-sm rounded sm:mx-1 sm:h-10 h-7 border-2 border-black ${
              currentPage !== page ? 'bg-gray-700 text-white' : 'bg-white'
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        className='sm:w-10 w-7 sm:text-lg cursor-pointer text-sm rounded ml-1 sm:mx-1 sm:h-10 h-7 border-2 bg-gray-700 text-white border-black'
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
