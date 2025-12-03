import express from "express";

import authRoutes from "./routes/auth.routes.js";
import expensesRoutes from "./routes/expensesRoute.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/expenses", expensesRoutes);

export default router;
