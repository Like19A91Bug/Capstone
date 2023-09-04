import express from "express";
import cors from "cors";
import { db, Homebrew, NewCharacter } from "./db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ hello: "world" });
});

server.post("/homebrew", async (req, res) => {
    const newUser = await Homebrew.create({
        username: req.body.username,
        password: req.body.password,
    });
    res.send({ userID: newUser.dataValues.id });
});

server.post("/newCharacter", async (req, res) => {
    const newCharacter = NewCharacter.create({
        playerID: req.body.userID,
        name: req.body.name,
    });
    res.send({});
});

server.listen(3080, () => {
    console.log("Server online");
});
