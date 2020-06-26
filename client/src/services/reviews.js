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

export const getRecipe = async id => {
  try {
      const response = await api.get(`/recipes/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const getRecipes = async () => {
  try {
    const response = await api.get('/recipes')
    return response.data
  } catch (error) {
      throw error
  }
}

export const createRecipe = async recipe => {
  try {
      const response = await api.post('/recipes', recipe)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateRecipe = async (id, recipe) => {
  try {
      const response = await api.put(`/recipes/${id}`, recipe)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteRecipe = async id => {
  try {
      const response = await api.delete(`/recipes/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

