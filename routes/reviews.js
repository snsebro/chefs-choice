const { Router } = require('express')
const controllers = require('../controllers/reviews')
const recipeControllers = require('../controllers/recipes')

const router = Router()

router.get('/reviews', controllers.getReviews)
router.post('/reviews', controllers.createReview)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)
router.get('/recipes', recipeControllers.getRecipes)
router.post('/recipes', recipeControllers.createRecipe)
router.put('/recipes/:id', recipeControllers.updateRecipe)
router.delete('/recipes/:id', recipeControllers.deleteRecipe)


module.exports = router