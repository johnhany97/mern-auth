let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err));

module.exports = {
  mongoose
};
