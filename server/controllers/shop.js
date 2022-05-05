
const Sequelize = require('sequelize')
const { redirect } = require('express/lib/response');

const Product = require('../models/product');

// each of the following are treated equal by the js compiler:
// foo().then(data => { return bar(data) })
// foo().then(data => bar(data))
// foo().then(bar)
// BUT passing a function by reference (last example) wont work if it's parent object is needed
// eg. Product.findAll().then(res.json) -> TypeError: Cannot read properties of undefined (reading 'app')
// this is because the json method is passed alone without res, and express needs the res object (i think)
// can get around this by binding the res object when passing the function reference: Product.findAll().then(res.json.bind(res))
// but imo its harder to understand at a glance, so .then(data => res.json(data)) is prob best practice

// see server.js for error handling via next()
exports.getProducts = (req, res, next) => Product.findAll().then(data => res.json(data)).catch(next);

exports.getProduct = (req, res, next) => Product.findByPk(req.params.productId).then(data => res.json(data)).catch(next);

exports.getCart = (req, res, next) => req.user.getCart().then(cart => cart.getProducts()).then(data => res.json(data)).catch(next);

// compare postCart with promises vs async/await, so much easier to read!
// also, no need for try/catch with promises, instead just use a .catch at the end of the promise chain
exports.postCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts({ where: { id: productId }});
    // use the cart's existing product OR fetch the product
    const product = products[0] || await Product.findByPk(productId);
    // increment the existing products quantity OR default to 1
    const quantity = product.cartItem ? product.cartItem.quantity + 1 : 1; 
    const newProduct = await cart.addProduct(product, { through: { quantity } });
    res.json(newProduct);
  } catch(error) {
    next(error);
  }
};

// carrying on with async/await
exports.postDeleteCartItem = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const result = await products[0].cartItem.destroy();
    res.json(result);
  } catch(error) {
    next(error);
  }
};

exports.postOrder = async (req, res, next) => {
  try {
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const order = await req.user.createOrder();
    // spread syntax makes it a little less readable but a lot more concise... trade off lol
    const orderProducts = products.map(product => ({...product, orderItem: { quantity: product.cartItem.quantity}}));
    await order.addProducts(orderProducts);
    await cart.setProducts(null);
    res.redirect('/orders');
  } catch(error) {
    next(error);
  }
};

exports.getOrders = (req, res, next) => req.user.getOrders({ include: ['products'] }).then(data => res.json(data)).catch(next)

exports.getCheckout = (req, res, next) => {
  // res.render('shop/checkout', {
  //   path: '/checkout',
  //   pageTitle: 'Checkout'
  // });
};





