const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creates the schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});
// creates the model name 'mariochar' based on MarioCharSchema
const MarioChar = mongoose.model('mariochar', MarioCharSchema);
// exports the model
module.exports = MarioChar;
