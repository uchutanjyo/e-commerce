require('dotenv').config();
const express = require('express');


const winston = require('winston')
console.log('ok')
const app = express();
const cors = require('cors')
const sequelize = require('./config/database')

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,  {through: OrderItem})

const productRoutes = require('./routes/products')

const PORT= process.env.PORT


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.use(cors());

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })

    .catch(err => console.log(err));
});

app.use('/', productRoutes)
 
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal server error.')
})

sequelize
  .sync()

  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Matt', email: 'test@test.com' });
    }
    return user;
  })
.then(user => {

   return user.createCart()

})
  .then(cart => {
    console.log(cart);
    cart.dataValues.totalPrice = 0;
      app.listen(PORT == 'NaN' ? 4000 : PORT, () => {
        console.log(`App listening on port ${PORT}`);
      });

    })
    .catch(err => console.log(err))

