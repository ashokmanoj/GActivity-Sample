// src/api/expensesApi.js
import api from "./axiosInstance";

// filters = { rm, designation, executive, allFilter, status, startDate, endDate, page, limit }
export const fetchExpenses = async (filters = {}) => {
  const res = await api.get("/expenses/report", { params: filters });
  return res.data; // { total, page, limit, totalPages, rows }
};

export const exportExpenses = async (filters = {}) => {
  // return a blob
  const res = await api.get("/expenses/report/export", {
    params: filters,
    responseType: "blob",
  });
  return res.data;
};
