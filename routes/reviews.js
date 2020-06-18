const { Router } = require('express')
const controllers = require('../controllers/reviews')

const router = Router()

router.get('/reviews', controllers.getReviews)
router.get('/reviews/:id', controllers.getReview)
router.post('/reviews', controllers.createReview)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)


module.exports = router