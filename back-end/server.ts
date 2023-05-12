import * as dotenv from 'dotenv'
import mongoose from "mongoose"
import express = require("express");
import morgan = require('morgan');
dotenv.config({path:'./config.env'});
import { startServer } from "./graphql";

import gameRoute from "./routes/gameRoute";
import ratingRoute from "./routes/ratingRoute"
import userRoute from "./routes/userRoute"
import userOwnedGameRoute from "./routes/userOwnedGameRoute"

const DB = process.env.DATABASE_DEV!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {
}).then(() => console.log('Connected to the database successfully!'));

// Create Express server
const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files


app.get("/", (req, res) => {

    res.status(200)
        .json({
            status: "success",
            message: "Hello World"
        })
});

app.post("/", (req, res) => {

    const jsonData = req.body;
    console.log()
    res.status(201)
        .json({
            status: "success",
            data: jsonData
        })
})

app.use("/api/games", gameRoute);
app.use("/api/ratings", ratingRoute);
app.use("/api/users", userRoute)
app.use("/api/userOwnedGames", userOwnedGameRoute)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Database server running on http://localhost:${port}/api`);
});

// Start the Apollo/Graphql server
startServer();