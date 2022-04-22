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
  const searchUsers = async text => {
    setLoading();

    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items //this is the data we want to send, reducer puts it in state and sends to components that need it
      });
      // dont need setLoading to false because it happens in the reducer with SEARCH_USERS
  };

  // get user
  const getUser = async (username) => {
    setLoading();

    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // get repos

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // set loading - going to dispatch/sends the type of SET_LOADING (an ojbect) to the reducer
  const setLoading = () => dispatch({ type: SET_LOADING });
  

  // makes this available to entire app
  // {props.children} below is placeholder saying any child components go here
  return (
    <githubContext.Provider
      value = {{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
      }}
    >
      {props.children} 
    </githubContext.Provider>
  );
};

export default GithubState;