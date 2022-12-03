import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import "./passport";

import swagger from "swagger-ui-express";
import swaggerConfig from "./swagger.json" assert { type: "json" };

import UserRoutes from "./routes/user";
import TasksRoutes from "./routes/tasks";

config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", UserRoutes);
app.use(
  "/tasks",
  passport.authenticate("jwt", { session: false }),
  TasksRoutes
);

app.use("/", swagger.serve, swagger.setup(swaggerConfig));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Server Running on Port: http://localhost:${process.env.PORT}`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
