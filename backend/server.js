import express from "express";
import cors from "cors";
import { db, Homebrew, NewCharacter, Feats } from "./db.js";

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

server.get("/adventurers", async (req, res) => {
    res.send({ adventurers: await NewCharacter.findAll() });
});

server.post("/newCharacter", async (req, res) => {
    const newCharacter = NewCharacter.create({
        userID: req.body.userID,
        name: req.body.name,
        race: req.body.race,
        class: req.body.class,
        subclass: req.body.subclass,
        height: req.body.height,
        weight: req.body.weight,
        alignment: req.body.alignment,
        str: req.body.str,
        dex: req.body.dex,
        con: req.body.con,
        int: req.body.int,
        wis: req.body.wis,
        cha: req.body.cha,
    });
    res.send({});
});

server.get("/newcharacters", async (req, res) => {
    // 10 Use db from 3 & 4 to run a select query on the todos table to get the data

    // 11 RESpond to the front end with the data from the query from 10
    res.send({
        newcharacters: await NewCharacter.findAll({ include: [Feats] }),
    });
});

server.get("/newcharacters/:id", async (req, res) => {
    // 10 Use db from 3 & 4 to run a select query on the todos table to get the data

    // 11 RESpond to the front end with the data from the query from 10
    res.send({
        character: await NewCharacter.findOne({
            where: { id: req.params.id },
            include: [Feats],
        }),
    });
});

server.put("/feats", async (req, res) => {
    console.log(req.body);
    for (const feat of req.body.feats) {
        if (!feat.characterID) {
            feat.characterID = req.body.characterID;
        }

        await Feats.upsert(feat);
    }
    res.send({});
});

server.listen(3080, () => {
    console.log("Server online");
});
