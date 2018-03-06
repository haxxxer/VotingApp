const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI  || "mongodb://localhost:27017/VotingApp";
mongoose.connect(dbURI);
mongoose.Promise = global.Promise;
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection open to " + dbURI);
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection disconnected");
});

module.exports = mongoose