const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./config/database')

const productRoutes = require('./routes/products')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

app.use('/', productRoutes)

// const Product = require('./models/product');

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
sequelize
  .sync()
  .then(result => {
console.log('synced')
  })

   app.listen(8001, () => {
  console.log(`listening on port ${8001}`);
})