const Sequelize = require('sequelize')


const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DIALECT,
    DB_HOST
} = process.env;

console.log(process.env.PORT )

console.log(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_DIALECT)


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
            dialect: 'mysql',
            host: DB_HOST,
            logging: false

    
     
});

module.exports = sequelize;


