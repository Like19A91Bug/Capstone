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
        experience: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        health: DataTypes.INTEGER,
        temphealth: DataTypes.INTEGER,
        playerID: DataTypes.INTEGER,
    });
};

export default NewCharacter;
