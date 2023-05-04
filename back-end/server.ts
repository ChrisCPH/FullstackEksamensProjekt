import app from "./app"
import * as dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config({path:'./config.env'});

const DB = process.env.DATABASE_DEV!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD!,
);

mongoose.connect(DB, {
}).then(() => console.log('DB connection successful!'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Database server running on port ${port}`);
});