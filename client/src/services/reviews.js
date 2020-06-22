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


