import React from "react";

export default function Pagination({
  currentPage = 1,
  totalItems = 0,
  pageSize = 10,
  onPageChange = () => {},
}) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null; // hide pagination when only 1 page

  const createPageArray = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const pages = createPageArray();

  return (
    <div className="flex items-center justify-center gap-2 mt-6 select-none">

      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 rounded border text-sm 
          ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded text-sm border 
              ${
                p === currentPage
                  ? "bg-blue-600 text-white border-blue-600"
                  : "hover:bg-gray-100"
              }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 rounded border text-sm 
          ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
      >
        Next
      </button>
    </div>
  );
}
