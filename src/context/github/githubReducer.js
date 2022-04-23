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

// switch case statements are kind of like if else, cases are the ifs
export default (state, action) => {
  switch(action.type) {
    case SEARCH_USERS:
      return {
        ...state, // this spread returns the current state
        users: action.payload,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        lading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state, //spread returns copy of state (state is immutable so can't reassign it), have to make a copy and then add any additions/changes
        loading: true
      };
    default:
      return state; //if there's no case, return the state as is
  }
}