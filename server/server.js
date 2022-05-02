const express = require('express');

const app = express();
const cors = require('cors')
const sequelize = require('./config/database')

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const productRoutes = require('./routes/products')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.use('/', productRoutes)

app.use((req, res, next) => {
  console.log('AHH')
  User.findByPk(1)
    .then(user => {
      req.user = user;
      console.log(user, req.user, 'r-u')
      next();
    })
    .catch(err => console.log(err));
});



// const Product = require('./models/product');

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,  {through: OrderItem})

sequelize
  .sync()
  // .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Matt', email: 'test@test.com' });
    }
        // console.log(user, 'current user')
    return user;
  })
// .then(user => {
//    return user.createCart()

// })
.then(cart => {
    // console.log(cart,'cart')
app.listen(8001);

})
.catch(err => console.log(err))
// syncs models to database and creates tables

