const Review = require('../models/review')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getReviews = async (req, res) => {
  try {
      const review = await Review.find()
      res.json(review)
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

const createReview = async (req, res) => {
  try {
      const review = await new Review(req.body)
      await review.save()
      res.status(201).json(review)
  } catch (error) {
      console.log(error)
      res.status(500).json({ error: error.message })
  }
}

const updateReview = async (req, res) => {
  const { id } = req.params
  await Review.findByIdAndUpdate(id, req.body, { new: true }, (error, review) => {
      if (error) {
          return res.status(500).json({ error: error.message })
      }
      if (!review) {
          return res.status(404).json({ message: 'review not found!' })
      }
      res.status(200).json(review)
  })
}

const deleteReview = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Review.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Review deleted")
      }
      throw new Error("Post not found")
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getReviews,
  createReview,
  updateReview,
  deleteReview
}