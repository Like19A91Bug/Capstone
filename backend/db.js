import { Sequelize } from "sequelize";

const db = new Sequelize(`postgres://lik19a91bug@localhost:5432/homebrew`);
const Homebrew = HomebrewModel(db);
const NewCharacter = NewCharacterModel(db);

const connectToDB = async () => {
    try {
        await db.authenticate();
        console.log("Connected to database");

        Homebrew.hasMany(NewCharacter, { forgeinKey: "playerID" });

        db.sync();
    } catch (error) {
        console.error(error);
        console.error("Panic. DB connection issue");
    }
};

connectToDB();

export { db, Homebrew };
