
const Sequelize = require('sequelize')

const Product = require('../models/product');
 
exports.getProducts = (req, res) => {
  try {
  Product.findAll().then(products => {
    console.log(products, 'itworked');
return res.json(products);
 }).catch(err => console.log(err))
}
  catch(err) { console.log(err, 'IT DIDNTWORK') } 
}




