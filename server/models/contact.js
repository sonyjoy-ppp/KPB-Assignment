const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let contactSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: Number
  }
}, {
    collection: 'contactlist'
  })
module.exports = mongoose.model('contact', contactSchema)