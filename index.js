import express from "express";
import mongoose from "mongoose";
import userRoutes from "./backend/Routes/userRoute.js";
import authRoutes from "./backend/Routes/authRoute.js";
import dotenv from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected Successfully"))
  .catch((error) => console.log("Not Connected", error));

const app = express();

app.use(express.json());

// .........API Middleware Endpoint............//
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = 3300;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

//..........Handling Errors..........//
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
