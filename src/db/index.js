import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `Mongo DB connected !! DB_Host: ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection error ", error);
  }
};

export default connectDB;
