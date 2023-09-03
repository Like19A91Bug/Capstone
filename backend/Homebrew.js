import { DataTypes } from "sequelize";

const Homebrew = (db) => {
    return db.define("homebrew", {
        id: {
            primaryKey: true,
            type: DataTypes.INTERGER,
            autoIncrement: true,
        },
        username: DataTypes.STRINNG,
        password: DataTypes.VARCHAR,
    });
};
export default Homebrew;
