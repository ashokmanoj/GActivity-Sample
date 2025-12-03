import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// DB Connection
import "./src/config/db.js";

// ROUTES
import appRoutes from "./src/app.js";

const app = express();

// ⭐ CORS FIX (works in Express v5)
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ⭐ JSON parser
app.use(express.json());

// ⭐ API routes
app.use("/api", appRoutes);

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port " + process.env.PORT);
});
