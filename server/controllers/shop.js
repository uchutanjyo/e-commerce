const Sequelize = require('sequelize')
const {
  redirect
} = require('express/lib/response');

const Product = require('../models/product');


exports.getProducts = async (req, res, next) => {
try{
 const data = await Product.findAll();
 console.log('asdf')
 res.json(data);
}
 catch (error) {
    next(error);
  }
}

exports.getProduct = async (req, res, next) => {
  try {
    console.log(req)
    const data = await Product.findByPk(req.params.productId);
    console.log(data)
    res.json(data)
  } catch (error) {
    next(error);
  }
}

exports.getCart = async (req, res, next) => {
  try {

    const cart = await req.user.getCart();
    const data = await cart.getProducts();
    res.json(data)
  } catch (error) {
    next(error);
  }
}

exports.postCart = async (req, res, next) => {
  try {
 const {
      productId
    } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts({
      where: {
        id: productId
      }
    });
    // use the cart's existing product OR fetch the product
    const product = products[0] || await Product.findByPk(productId);
    // increment the existing products quantity OR default to 1
    const quantity = product.cartItem ? product.cartItem.quantity + 1 : 1;
    const newProduct = await cart.addProduct(product, {
      through: {
        quantity
      }
    });
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

exports.postDeleteCartItem = async (req, res, next) => {
  try {

    const {
      productId
    } = req.body;
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const filteredProd = await products.filter((wantToDelete) => {
      return wantToDelete.dataValues.id == productId
    })
    console.log('OK', filteredProd[0].cartItem)
    const result = await filteredProd[0].cartItem.destroy();
    // products[0].cartItem
    console.log('result' , result)
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.postOrder = async (req, res, next) => {
  try {
    const cart = await req.user.getCart();
    const products = await cart.getProducts();
    const order = await req.user.createOrder();
    const orderProducts = products.map(product => ({
      ...product,
      orderItem: {
        quantity: product.cartItem.quantity
      }
    }));
    await order.addProducts(orderProducts);
    await cart.setProducts(null);
    res.redirect('/orders');
  } catch (error) {
    next(error);
  }
};

exports.getOrders = (req, res, next) => req.user.getOrders({
  include: ['products']
}).then(data => res.json(data)).catch(next)

exports.getCheckout = (req, res, next) => {
  // res.render('shop/checkout', {
  //   path: '/checkout',
  //   pageTitle: 'Checkout'
  // });
};
