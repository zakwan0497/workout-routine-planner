import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import entryRoute from "./routes/entries.js";
import routineRoute from "./routes/routines.js";
import mealRoute from "./routes/meals.js";
import cookieParser from "cookie-parser";
import cors from "cors"

dotenv.config();
// const express = require('express');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 7700;

console.log("MONGODB URI:", process.env.MONGO);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

app.get('/', (req, res) => { res.send('Hello from Express!') });

app.use(cookieParser())
app.use(express.json());
app.use(helmet());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);
app.use("/api/routines", routineRoute);
app.use("/api/meals", mealRoute);

app.listen(PORT, () => {
    // console.log("Listening on port 2000");
    console.log(`Listening on port ${PORT}`);
    connect();
});


// server > index.js

// Main entry point of the server.
// Sets up and configure the Express server.
// Connects to the database.
// Starts the server to listen for incoming requests.

// Initilize Express App.
// Middleware COnfiguration. (applies middleware for parsing bodies, handling CORS, logging, etc.)
// Database Connection.
// Route Handling. (imports and uses routes handlers for different endpoints)
// Error Handling. (sets up global error handling middleware)
// Start Server. (starts the server and listens for incoming requests on specified port)