import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// DB Connection
import "./src/config/db.js";

// ROUTES
import appRoutes from "./src/app.js";

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "http://192.168.1.10:5173",
  "https://2jm4vvvb-5173.inc1.devtunnels.ms/",
  "https://2jm4vvvb-5000.inc1.devtunnels.ms/"
];

// ⭐ CORS FIX (works in Express v5)
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
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
