import { DataTypes } from "sequelize";

const Homebrew = (db) => {
    return db.define("homebrew", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    });
};
export default Homebrew;
