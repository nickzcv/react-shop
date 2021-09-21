const mongoose = require('mongoose');

exports.connectDb = async () => {
  await mongoose.connect('mongodb://localhost:27017/romadoma');
};