import { Sequelize } from "sequelize";
import HomebrewModel from "./Homebrew.js";
import NewCharacterModel from "./NewCharacter.js";

const db = new Sequelize(`postgres://like19a91bug@localhost:5432/homebrew`);
const Homebrew = HomebrewModel(db);
const NewCharacter = NewCharacterModel(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected to database");

        Homebrew.hasMany(NewCharacter, { forgeinKey: "playerID" });
        //NewCharacter.hasMany(Feats, {foreignKey: "characterID"})

        // NewCharacter.find({where: {userID: req.body.userID}, include: [Feats]})

        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Panic. DB connection issue");
    }
};

connectToDB();

export { db, Homebrew, NewCharacter };
