const express = require('express');

const router = express.Router();

const products = require('../controllers/products')

// console.log(products.getProducts, 'GP')

router.get('/products', products.getProducts)

// router.post('../home', products.postProducts)

module.exports = router;