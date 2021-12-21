"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// base de datos, usuario, password
const db = new sequelize_1.Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map