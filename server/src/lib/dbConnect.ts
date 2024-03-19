import mongoose from "mongoose";
import { Express } from "express";

export const dbConnect = async (app: Express) => {
  const mongo_uri = process.env.MONGO_URI as string
  try {
    await mongoose.connect(mongo_uri);
    console.log("connection established!");
    app.listen(4000, () => {
      console.log("http://localhost:4000");
    });
  } catch (error) {
    console.log(error)
    console.log("error connecting to database");
  }
};
