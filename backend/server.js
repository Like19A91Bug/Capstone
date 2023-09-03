import express from "express";
import cors from "cors";
import { db } from ".db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.listen(3080, () => {
    console.log("Server online");
});
