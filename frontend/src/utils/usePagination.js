import { useState } from "react";

export default function usePagination(data = [], itemsPerPage = 10) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentData = data.slice(start, end);

  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const resetPage = () => setPage(1);

  return {
    page,
    totalPages,
    currentData,
    goNext,
    goPrev,
    setPage,
    resetPage,
  };
}
