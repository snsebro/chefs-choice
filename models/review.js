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
    name: [Name],
    imgURL: { type: String, required: true },
    review: { type: String, required: true },
    starCount: { type: num, required: true },
    featuredChef: { type: boolean, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('review', Review)