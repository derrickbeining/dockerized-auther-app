import axios from 'axios'


const SET_CURRENT_USER = 'SET_CURRENT_USER'
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'
// const SIGNUP = 'SIGNUP'

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  }
}

export const login = credentials => dispatch => {
  console.log('logging in...')
  return axios.post('/login', credentials)
    .then(res => res.data)
    .then(user => dispatch(setCurrentUser(user)))
    .then(() => console.log('Login successfull'))
    .catch(console.error.bind(console))
}

export const logout = () => dispatch => {
  console.log('logging out...')
  return axios.post('/logout')
    .then(() => dispatch(clearCurrentUser()))
    .then(() => console.log('Logout successfull'))
    .catch(err => console.error('Logout unsuccessful: ', err))
}

export default (currentUser = {}, action) => {

  const {type, user} = action

  switch (type) {

    case SET_CURRENT_USER:
      return user

    case CLEAR_CURRENT_USER:
      return {}

    default:
      return currentUser

  }
}
