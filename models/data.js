const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  id:  {type: Number, unique: true},
  doAgree: Number,
  day:   Number,
  date: { type: Date, default: Date.now },
  reason: Number, 
  comment: {type: String, trim: true},
});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data