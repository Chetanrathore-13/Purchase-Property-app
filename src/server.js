import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

dotenv.config({
    path: "./.env",
});

const app = express();
app.use(express.json());
app.use(cors());
// app.set("view engine", "ejs");
// app.set("views", path.join(path.resolve(), "src/views"))

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
};
connectDb();


import authRoutes from "./routes/auth.js";
app.use("/api/v1/auth", authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
