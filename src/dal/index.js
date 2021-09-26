const mysql = require('mysql2/promise');
const config = require('../config/db_config')
const {Sequelize} = require('sequelize')
initialize();
module.exports = db = {
};

async function initialize() {
    const { host, port, user, password, database } = config;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });
    db.Property = require('./models/property')(sequelize);
    await sequelize.sync();
}
