import { Sequelize } from "sequelize";

const initDatabase = async (models: [(sequelize: Sequelize) => void]) => {
    const sequelize = new Sequelize('database', 'root', 'password', {
        host: 'localhost',
        dialect: 'mariadb',
        logging: console.log, //TODO: update this to use a custom logger
    });

    for (const model in models) {
        model(sequelize);
    }

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
