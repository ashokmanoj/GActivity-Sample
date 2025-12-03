import express from "express";
import {
  getExpensesReport,
  exportExpensesReport,
} from "../controllers/expensesReport.js";

const router = express.Router();

// GET /api/expenses/report  -> paged filtered list
router.get("/report", getExpensesReport);

// GET /api/expenses/report/export -> xlsx (uses same query params)
router.get("/report/export", exportExpensesReport);

export default router;
