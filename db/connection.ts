import { Sequelize } from "sequelize";

// base de datos, usuario, password
const db = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

export default db;