import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./Routes/userRoute.js";

import connectDB from "./config/db.js";
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
