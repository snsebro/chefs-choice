import api from './apiConfig'

export const getReviews = async () => {
  try {
    const response = await api.get('/reviews')
    console.log(response)
    return response.data
  } catch (error) {
      throw error
  }
}

export const createReview = async product => {
  try {
      const response = await api.post('/reviews', product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateReview = async (id, product) => {
  try {
      const response = await api.put(`/reviews/${id}`, product)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteReview = async id => {
  try {
      const response = await api.delete(`/reviews/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

