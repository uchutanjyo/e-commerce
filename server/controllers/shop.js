
const Sequelize = require('sequelize')
const { redirect } = require('express/lib/response');

const Product = require('../models/product');

// each of the following are treated equal by the js compiler:
// findAll().then(data => { return res.json(data) })
// findAll().then(data => res.json(data))
// findAll().then(res.json)

exports.getProducts = (req, res, next) => Product.findAll().then(res.json).catch(error => res.status(500).send('Internal server error.'));

exports.getProduct = (req, res, next) => Product.findByPk(req.params.productId).then(res.json).catch(error => res.status(500).send('Internal server error.'));

exports.getCart = (req, res, next) => req.user.getCart().then(getProducts).then(res.json).catch(error => res.status(500).send('Internal server error.'));

// compare postCart with promises vs async/await, so much easier to read!
exports.postCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts({ where: { id: productId }});
    // use the cart's existing product OR fetch the product
    const product = products[0] || Product.findByPk(productId);
    // increment the existing products quantity OR default to 1
    const quantity = product.cartItem ? product.cartItem.quantity + 1 : 1; 
    const newProduct = await fetchedCart.addProduct(product, { through: { quantity } });
    return res.json(newProduct);
  } catch(error) {
    return res.status(500).send('Internal server error.');
  }
};

// carrying on with async/await
exports.postDeleteCartItem = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const result = await products[0].cartItem.destroy();
    return res.json(result);
  } catch(error) {
    return res.status(500).send('Internal server error.');
  }
};



exports.postOrder = (req, res, next) => {
  try {
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const order = await req.user.createOrder();
    // spread syntax makes it a little less readable but a lot more concise... trade off lol
    const orderProducts = products.map(product => ({...product, orderItem: { quantity: product.cartItem.quantity}}));
    await order.addProducts(orderProducts);
    await cart.setProducts(null);
    return res.redirect('/orders');
  } catch(error) {
    return res.status(500).send('Internal server error.');
  }
};

exports.getOrders = (req, res, next) => req.user.getOrders({ include: ['products'] }).then(res.json).catch('Internal server error.')

exports.getCheckout = (req, res, next) => {
  // res.render('shop/checkout', {
  //   path: '/checkout',
  //   pageTitle: 'Checkout'
  // });
};





