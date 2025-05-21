import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages: (number | 'dots')[] = [];

  // Always show first page
  pages.push(1);

  if (currentPage > 2) {
    pages.push('dots'); // between 1 and currentPage
  }

  // Pages from current to current+5 (max)
  const end = Math.min(currentPage + 5, totalPages - 1);
  for (let i = currentPage; i <= end; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i);
    }
  }

  if (end < totalPages - 1) {
    pages.push('dots'); // before last
  }

  if (totalPages > 1) {
    pages.push(totalPages); // always last page
  }

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {pages.map((page, index) =>
        page === 'dots' ? (
          <span key={`dots-${index}`} className="px-2 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 border rounded ${
              page === currentPage ? 'bg-primary text-white' : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
