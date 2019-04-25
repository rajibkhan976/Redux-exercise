export const addUser = (users) => ({
  type: 'ADD_USER',
  payload: users
})

export const removeUser = () => ({
  type: 'REMOVE_USER',
  payload: null
})
