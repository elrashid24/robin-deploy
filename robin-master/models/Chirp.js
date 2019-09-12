const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChirpSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  body: {
    type: String,
    required: true
  },

  data: {
    type: Date,
    deafult: Date.now
  },

  likes: {
    type: Number,
    default: 0
  }
});

const Chirp = mongoose.model("chirp", ChirpSchema);

module.exports = Chirp;