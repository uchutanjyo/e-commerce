require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors')
const sequelize = require('./config/database')
const winston = require('winston');
const expressWinston = require('express-winston');

const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const productRoutes = require('./routes/products')

const PORT = process.env.PORT || 8001;

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,  {through: OrderItem})

// log request info via expressWinston
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
}));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(next);
});

app.use('/', productRoutes)

// log request errors via expressWinston
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));
 
// custom express error handler
// see section "Writing error handlers": https://expressjs.com/en/guide/error-handling.html
// basically if you call next(error) from a middleware/route, this handler will be called with the error (see shop.js)
// this way you dont need to handle errors separately everywhere
// i think for this to work the error passed to next() must be an Error instance
// eg. explicity created: next(new Error(error))
// OR created by promises or try/catch: .catch(next) OR try {...} catch(error) { next(error) } 
// if you want special error handling on a route (eg. diff status code/message), dont call next(error) and instead handle the error & send the response from there
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
// .then(user => {
//    return user.createCart()

// })
.then(cart => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

})
.catch(err => console.log(err))
// syncs models to database and creates tables



// try {
//      sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }