const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  tgId: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  sendAt: {
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    },
  }
});

module.exports = model('tgNoteDumpster', schema);
