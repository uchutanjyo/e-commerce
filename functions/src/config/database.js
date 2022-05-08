
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sql5490595', 'sql5490595', 'arj7fxmYK8', {dialect: 'mysql', host: 'ip-172-31-29-229'});

module.exports = sequelize;