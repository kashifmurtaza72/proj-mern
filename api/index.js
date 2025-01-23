import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();

app.use(express.json()); // this is going to allow json as the input of the backend.
app.use(cookieParser());

dotenv.config();

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// app.get("/test", (req, res) => {
//   res.json({ message: "API is working" });
// });
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/post", postRoutes);

app.use("/api/comment", commentRoutes);

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
  


// mongoose
//   .connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS:15000, socketTimeoutMS:45000})
//   .then(() => {
//     console.log("Mongodb is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
