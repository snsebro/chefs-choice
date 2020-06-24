const Recipe = require('../models/recipe')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    res.json(recipe)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.find()
    res.json(recipe)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createRecipe = async (req, res) => {
  console.log(req.body)
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    res.status(201).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateRecipe = async (req, res) => {
  const { id } = req.params
  await Recipe.findByIdAndUpdate(id, req.body, { new: true }, (error, recipe) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!recipe) {
      return res.status(404).json({ message: 'recipe not found!' })
    }
    res.status(200).json(recipe)
  })
}

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Recipes deleted")
    }
    throw new Error("Post not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
}