const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
const logger = require('morgan');
// Database configuration
const db = require('./config/db');
// Routing
const productRoutes = require('./routings/product');
const userRoutes = require('./routings/user');
const orderRoutes = require('./routings/order');
// Detect is Prod env or not
const production = process.env.NODE_ENV === 'production';
// Dotenv is a zero-dependency module
// that loads environment variables from a .env file into process.env
require('dotenv').config();
// Init Express
const app = express();
const port = 5000;
// Load Prod env
production && app.use(express.static(path.join(__dirname, '../client/build')));
// Run logger
app.use(logger('dev'));
// Parse incoming request bodies in a middleware before your handlers
// available under the req.body property
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Express middleware for uploading files
// When you upload a file, the file will be accessible from req.files
app.use(fileUpload({}));
// Database connection
db.connectDb().catch(error => console.log(error));
// Routes
app.use('/products', productRoutes);
app.use('/user', userRoutes);
app.use('/order', orderRoutes);
// Run Prod
production && (
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  })
)
// Start point
app.listen(process.env.PORT || port, function() {
    console.log('Site started!');
});