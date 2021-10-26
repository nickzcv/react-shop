const mongoose = require('mongoose');

exports.connectDb = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.9nzo3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
  );
};