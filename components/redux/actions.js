// action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const UPDATE_QUIZ = 'UPDATE_QUIZ'
export const UPDATE_TIMER = 'UPDATE_TIMER'
export const UPDATE_STATE = 'UPDATE_STATE'
// action creators

export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const updateCategories = update => ({
  type: UPDATE_CATEGORIES,
  payload: update,
})

export const updateQuiz = update => ({
  type: UPDATE_QUIZ,
  payload: update,
})

export const updateTimer = update => ({
  type: UPDATE_TIMER,
  payload: update,
})

export const updateState = update => ({
  type: UPDATE_STATE,
  payload: update,
})
