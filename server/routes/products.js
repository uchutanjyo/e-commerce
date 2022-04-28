const express = require('express');

const router = express.Router();

const products = require('../controllers/products')

router.get('/products', products.getProducts)

// router.post('../home', products.postProducts)

module.exports = router;