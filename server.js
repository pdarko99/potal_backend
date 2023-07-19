import express from "express";
import cors from "cors";
import helmet from "helmet";
import {registrationRouter} from "./routes/registration.route.js"
// let registration_router = require("./routes/registration.route")
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/registration", registrationRouter)

app.get("/", (req, res, next) => {
  res.send("we doing portal");
});

export { app };
