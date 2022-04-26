const express = require('express');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products')

const app = express();

const sequelize = require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middleware for allowing react to fetch() from server
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

const Product = require('./models/product');


try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 

app.use('/products', productRoutes)

sequelize
  .sync()
  // .sync()
  .then(result => {
    return ;
  })

app.listen(8000, () => {
  console.log(`listening on port ${8000}`);
})