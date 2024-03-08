import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected Successfully"))
  .catch((error) => console.log("Not Connected", error));

const PORT = 3300;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
