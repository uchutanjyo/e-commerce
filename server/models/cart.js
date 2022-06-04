const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }

});

module.exports = Cart;

  // totalPrice: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0
  // }