import { DataTypes } from "sequelize";

const Feats = (db) => {
    return db.define("feats", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        characterID: DataTypes.INTEGER,
    });
};

export default Feats;
