const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fileUpload = require('express-fileupload');
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
// Load Prod env
production && app.use(express.static(path.join(__dirname, '../client/build')));
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
app.use(fileUpload());
// Database connection
db.connectDb();
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

app.listen(process.env.PORT || 5000);
