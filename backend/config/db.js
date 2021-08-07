// connection file
import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // include these to avoid warning messages
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host} `.cyan.underline);
  } catch (error) {
    // grab the error message
    console.error(`Error: ${error.message}`.red.bold);
    // exit with failure
    process.exit(1);
  }
};

export default connectDB;
