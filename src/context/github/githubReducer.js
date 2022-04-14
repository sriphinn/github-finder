// function that decides what happens to state based on actions
// function that takes a previous state and returns a new state
// when the state changes, the component re-renders and the new state is available to component
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state, // this spread returns the current state
        users: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}