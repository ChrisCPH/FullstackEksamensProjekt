import app from "./app"
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config({path:'./config.env'});
import { startServer } from "./graphql";

const DB = process.env.DATABASE_DEV!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {
}).then(() => console.log('Connected to the database successfully!'));

const port = process.env.PORT;
app.listen(port, () => {
  //console.log(`Database server running on *:${port}`);
});

// Start the Apollo/Graphql server
startServer();