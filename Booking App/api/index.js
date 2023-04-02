import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
// import roomsRoute from "./routes/rooms.js";
// import usersRoute from "./routes/users.js";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongoDB");
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = errMessage || "some error";
  return res.status(errStatus).json({
    sucess: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", roomRoute);

// app.use("/rooms", roomsRoute);

app.listen(3001, () => {
  connect();
  console.log("Connected to backend");
});
