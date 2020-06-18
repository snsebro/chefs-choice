const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Name = new Schema(
  {
    first: { type: String, required: true },
    last: { type: String, required: true }
  }
)
const Review = new Schema(
  {
    name: [{first: String, last: String}],
    imgURL: { type: String, required: true },
    review: { type: String, required: true },
    starCount: { type: Number, required: true },
    featuredChef: { type: Boolean, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('review', Review)

