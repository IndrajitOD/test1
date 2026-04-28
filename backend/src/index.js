
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js"

import path from "path";

import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();


const PORT = process.env.PORT;
const __dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("(.*)", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

app.use(express.json());
app.use((req, res, next) => {
    console.log(`[INCOMING] ${req.method} ${req.url}`, req.body);
    next();
});
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === "development" ? ["http://localhost:5173", "http://127.0.0.1:5173"] : process.env.FRONTEND_URL,
    credentials: true,
}))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
    connectDB();
});
