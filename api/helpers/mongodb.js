const mongoose = require('mongoose');
const { mongoURI } = require('../config');

const checkConnection = () => {
  return mongoose.connection.readyState;
};

const connect = async () => {
  try {
    if (!checkConnection()) {
      console.log('Connecting...');
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      });
    }
    console.log(
      'Connected to database successfully, connection state:',
      checkConnection()
    );
  } catch (error) {
    console.error(error);
  }
};

const disconnect = async () => {
  await mongoose.connection.close();
  return checkConnection();
};

module.exports = { connect, checkConnection, disconnect };
