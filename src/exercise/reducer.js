import { combineReducers } from 'redux'

const initialState = {
  users: []
}

const root = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
    return {
      ...state,
      users: [...state.users, action.payload]
    }
    case 'REMOVE_USER':
    const tempUsers = state.users.splice(1,-1);
    console.log('temp',tempUsers);
    return {
      ...state,
      users: tempUsers
    }
    default:
      return state
  }
}

export default combineReducers({
  root,
})
