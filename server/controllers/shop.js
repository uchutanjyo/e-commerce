
const Sequelize = require('sequelize')
const { redirect } = require('express/lib/response');

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



exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
Product.findByPk(prodId)
.then(product => {
return res.json(product);
}).catch(err => console.log(err))
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
  // shop/index
  console.log(products)
  }).catch(err => console.log(err))
};

exports.getCart = (req, res, next) => {
  req.user.getCart()
  .then(cart => {
    return cart.getProducts()
    .then(products => {
    //  shop/cart
     console.log(products)
    }).catch(err => console.log(err))
    })
  .catch(err => console.log(err))
};

exports.postCart = (req,res,next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  req.user.getCart()
  .then(cart=> {
    fetchedCart = cart;
    console.log(cart)
    return cart.getProducts({where: {id: prodId}})
  }).then(products=> {
    let product;
    if (products.length > 0) {
      product = products[0]
    }
    let newQuantity = 1;
    if (product) {
      const oldQuantity = product.cartItem.quantity;
      newQuantity = oldQuantity + 1;
      return fetchedCart.addProduct(product, {through: {quantity: newQuantity}})
    }
    return Product.findByPk(prodId).then(product => {
      return fetchedCart.addProduct(product, {through: {quantity: newQuantity}})
    }).catch(err => console.log(err))
  }).then(() => {
      res.redirect('/cart');
  }).catch(err => console.log(err))
}


exports.postDeleteCartItem = (req, res, next) => {
    const prodId = req.body.productId;
  req.user.getCart()
  .then(cart => {
    return cart.getProducts({where: {id: prodId}})
  })
  .then(products => {
    const product = products[0];
    return product.cartItem.destroy();
  })
  .then(result => {
         res.redirect('/cart');

  })
  .catch(err => console.log(err))
  }

exports.postOrder = (req, res, next) => {
  let fetchedCart;
req.user.getCart()
.then(cart => {
fetchedCart = cart;
return cart.getProducts();
}).then(products => {
req.user.createOrder()
.then(order => {
  order.addProducts(products.map((product => {
    product.orderItem = {quantity: product.cartItem.quantity}
    return product
  })))
})
.catch(err=>console.log(err))
})
.then(result=> {
  fetchedCart.setProducts(null)
})
.then(result=> {
  res.redirect('/orders')
})
.catch(err => console.log(err));
}

exports.getOrders = (req, res, next) => {
  req.user.getOrders({include: ['products']})
    .then(orders => {
  //  shop/orders
  console.log(orders)
    }).catch(err => console.log(err))
};


exports.getCheckout = (req, res, next) => {
  // res.render('shop/checkout', {
  //   path: '/checkout',
  //   pageTitle: 'Checkout'
  // });
};





