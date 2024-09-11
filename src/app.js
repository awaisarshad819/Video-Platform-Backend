import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ orgin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: "16KB" }));
app.use(express.urlencoded({ extended: true, limit: "16KB" }));
app.use(express.static("public"));
app.use(cookieParser());

//Routes import
import userRoutes from "./routes/user.routes.js";

//Routes declaration
app.use("/api/v1/users", userRoutes);

export default app;
