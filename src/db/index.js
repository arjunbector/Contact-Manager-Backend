import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected: ${connectionInstance.connection.host}/${DB_NAME}`
    );
  } catch (err) {
    console.log("MongoDB connection failed.");
    console.log(err);
    process.exit(1);
  }
};
export default connectDB;
