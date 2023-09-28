import { Sequelize } from "sequelize";
import HomebrewModel from "./Homebrew.js";
import NewCharacterModel from "./NewCharacter.js";
import FeatsModel from "./Feats.js";

let dbURL = "postgres://like19a91bug@localhost:5432/homebrew";
if (process.env.DATABASE_URL) {
    dbURL = process.env.DATABASE_URL;
}
const db = new Sequelize(dbURL);
const Homebrew = HomebrewModel(db);
const NewCharacter = NewCharacterModel(db);
const Feats = FeatsModel(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected to database");

        Homebrew.hasMany(NewCharacter, { forgeinKey: "userID" });
        NewCharacter.hasMany(Feats, { foreignKey: "characterID" });

        // NewCharacter.find({where: {userID: req.body.userID}, include: [Feats]})

        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Panic. DB connection issue");
    }
};

connectToDB();

export { db, Homebrew, NewCharacter, Feats };
