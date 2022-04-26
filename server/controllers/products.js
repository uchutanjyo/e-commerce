
const Sequelize = require('sequelize')

const Product = require('../models/product');



// init DataTypes
 
exports.getProducts = (req, res) => {
  Product.findAll().then(products => {
    
  return products
  }).then(result => {
    console.log(result, 'the results')
  })
  .catch(err => console.log(err))
}



// exports.postProducts = (req, res, next) => {
// console.log(req.body)
// }

