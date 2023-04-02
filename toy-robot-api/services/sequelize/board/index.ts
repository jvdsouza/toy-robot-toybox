import { Sequelize, Model, DataTypes } from "sequelize";

class Board extends Model {
    declare id: number;
}

const initBoard = (sequelize: Sequelize) => {
    Board.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, { sequelize });
}

export default initBoard;
