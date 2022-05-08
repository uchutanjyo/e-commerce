const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/products', shopController.getProducts)

// router.post('../home', products.postProducts)

router.get('/products/:productId', shopController.getProduct);
// THE SEMIcolon indicates that :productId can be aanything

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/delete-cart', shopController.postDeleteCartItem)

router.get('/orders', shopController.getOrders);

router.post('/create-order', shopController.postOrder)

router.get('/checkout', shopController.getCheckout);

module.exports = router;
