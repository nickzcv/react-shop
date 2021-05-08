const mongoose = require("mongoose");

exports.connectDb = () => {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.9nzo3.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
  mongoose.set("useFindAndModify", false);
};