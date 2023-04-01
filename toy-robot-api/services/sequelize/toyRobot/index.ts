import { Sequelize, Model, DataTypes } from "sequelize";

class ToyRobot extends Model {
    declare id: number;
}

const initToyRobot = (sequelize: Sequelize) => {
    ToyRobot.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, { sequelize });
}

export default initToyRobot;
