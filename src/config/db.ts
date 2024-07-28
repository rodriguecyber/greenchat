import mongoose from "mongoose";
import env from "./env";

const connectDb = async () => {
  try {
    await mongoose.connect(`${env.DB_URI}`);
    console.log("db conneted successfully");
  } catch (error: any) {
    console.log(`failed to connect to mongodb ${error.message}`);
    process.exit(1); 
    return;
  }
};
export default connectDb;
