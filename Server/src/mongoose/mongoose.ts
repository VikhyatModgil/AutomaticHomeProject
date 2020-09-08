import mongoose from "mongoose";
import config from "../config"

let mon;

export async function mongooseServer(){
    // Connects to MongoDB and provides access to the application
    const MONGO_DB_URL = config.mongoDbURl;

    const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

    // Connect to MongoDB
    return mongoose.connect(MONGO_DB_URL, options)
    .catch(err => console.log(err));
}