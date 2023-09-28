import { DataTypes } from "sequelize";

const NewCharacter = (db) => {
    return db.define("newcharacter", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        race: DataTypes.STRING,
        class: DataTypes.STRING,
        subclass: DataTypes.STRING,
        height: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        alignment: DataTypes.STRING,
        str: DataTypes.INTEGER,
        dex: DataTypes.INTEGER,
        con: DataTypes.INTEGER,
        int: DataTypes.INTEGER,
        wis: DataTypes.INTEGER,
        cha: DataTypes.INTEGER,
        experience: { type: DataTypes.INTEGER, defaultValue: 0 },
        level: { type: DataTypes.INTEGER, defaultValue: 0 },
        health: { type: DataTypes.INTEGER, defaultValue: 0 },
        temphealth: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
    });
};

export default NewCharacter;
