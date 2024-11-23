import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


import express from "express";
const app = express();

dotenv.config();

app.use("/api/user", userRoutes);
app.use(express.json()); // this is going to allow json as the input of the backend.
app.use('/api/auth', authRoutes)

app.use(cookieParser());

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  });
});




mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app.get("/test", (req, res) => {
//   res.json({ message: "API is working" });
// });
