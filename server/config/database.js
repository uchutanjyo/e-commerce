
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sql5490595', 'sql5490595', 'arj7fxmYK8', {dialect: 'mysql', host: 'sql5.freemysqlhosting.net'});

module.exports = sequelize;