const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IngredientSchema = new Schema(
  {
    name: {type: String, required: true},
    original: { type: String, required: true },
  }
)

const Steps = new Schema(
  {
    number: {type: Number, required: true },
    step: { type: String, required: true }
  }
)

const Equipment = new Schema(
  {
    name: {type: String, required: true}
  }
)

const Recipe = new Schema(
  {
    chefName: {first: String, last: String},
    img: { type: String, required: true },
    bio: { type: String, required: true },
    knownFor: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    servings: { type: Number, required: true },
    readyInMinutes: { type: Number, required: true },
    difficultyLevel: { type: String, required: true },
    summary: { type: String, required: true },
    ingredients: [IngredientSchema],
    steps: [Steps],
    Equipment: [Equipment]

  },
  { timestamps: true }
)

module.exports = mongoose.model('recipe', Recipe)

