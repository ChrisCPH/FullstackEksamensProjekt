import * as dotenv from 'dotenv'
import mongoose from "mongoose"
import express = require("express");
import morgan = require('morgan');
const cors=require("cors");
import { startServer } from "./graphql";

import gameRoute from "./routes/gameRoute";
import ratingRoute from "./routes/ratingRoute"
import userRoute from "./routes/userRoute"

dotenv.config({path:'./config.env'});
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

// Reference: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe.
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));
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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Database server running on http://localhost:${port}/api`);
});

// Start the Apollo/Graphql server
startServer();