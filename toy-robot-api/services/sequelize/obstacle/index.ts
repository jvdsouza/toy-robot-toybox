import { Sequelize, Model, DataTypes } from "sequelize";

class Obstacle extends Model {
    declare id: number;
}

const initObstacle = (sequelize: Sequelize) => {
    Obstacle.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    }, { sequelize });
}

export default initObstacle;
