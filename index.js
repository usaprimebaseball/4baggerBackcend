import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import eventRouter from "./routes/event.js";
import errorRouter from "./routes/error.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/", authRouter);
app.use("/", errorRouter);
app.use("/events", eventRouter);
app.use("/account", userRouter);


const PORT = process.env.PORT|| 5000;
const CONNECTION_URL = "mongodb+srv://4bagger:usaprime@cluster0.usrwb.mongodb.net/users?retryWrites=true&w=majority"

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
