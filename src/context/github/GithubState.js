// all actions go here ie fetch data, search user

import React, { useReducer } from 'react';
import axios from 'axios'; //requests will be made here instead of App.js
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  // dispatch type back to reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  // search users

  // get user

  // get repos

  // clear users

  // set loading

  return <githubContext.Provider // makes this available to entire app
    value = {{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading
    }}
  >
    {props.children}
  </githubContext.Provider>
};

export default GithubState;