import { Sequelize, Model, DataTypes } from "sequelize";

class BoardObstacle extends Model {
    declare id: number;
}

const initBoardObstacle = (sequelize: Sequelize) => {
    BoardObstacle.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, { sequelize });
}

export default initBoardObstacle;
