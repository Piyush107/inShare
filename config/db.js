const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log("Database connected");
  }).catch(err => {
    console.log('Connection Lost.');
  })

}

module.exports = connectDB;

// qNelQfBxj7xSBc3o
