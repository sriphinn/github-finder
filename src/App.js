import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
  // state completeley moved to context
  
  // Class state
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };
  
  // below fetches users when app loads
  // async componentDidMount() {
  //   //while the date is being fetched set loading to true
  //   //can combine this with a conditional for a spinner
  //   this.setState({
  //     loading: true
  //   });

  //   const res = await axios
  //   .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   // .then not needed when using async await
  //   // .then(res => console.log(res.data));
  //   // after data is fetched update the state and set loading back to false
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // };

  // search Github users
  // when using arrow function async goes before parameter instaed of before function
  // const searchUsers = async text => {
  //   setLoading(true);

  //   const res = await axios
  //   .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     setUsers(res.data.items);
  //     setLoading(false)
  //     // this.setState({
  //     //   users: res.data.items, //added .items because the data recieved from API has items property, which is array of users matching query
  //     //   loading: false
  //     // });
  // };

  // Get single Github user
  // const getUser = async (username) => {
  //   setLoading(true);
  //   // this.setState({
  //   //   loading: true
  //   // });

  //   const res = await axios
  //   .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     setUser(res.data);
  //     setLoading(false);
  //     // this.setState({
  //     //   user: res.data, 
  //     //   loading: false
  //     // });
  // }

  // Get users repos
  // const getUserRepos = async (username) => {
  //   setLoading(true);
  //   // this.setState({
  //   //   loading: true
  //   // });

  //   const res = await axios
  //   .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     setRepos(res.data);
  //     setLoading(false);
  //     // this.setState({
  //     //   repos: res.data, 
  //     //   loading: false
  //     // });
  // }

  // // Clear users from state
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  //   // this.setState({ 
  //   //   users: [], 
  //   //   loading: false 
  //   // });
  // }

  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   // this.setState({
  //   //   alert: {msg: msg, type: type} //can also just leave it as msg, type
  //   // });
  //   setTimeout(() => setAlert(null), 1500);
  //     // this.setState({ alert: null }), 1500);
  // }; 

    return (
      // wrap entire app in the provider <GithubState>
      <GithubState> 
      <AlertState>
      <Router>
      <div>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={
                <User 
                  // // getUser={getUser} 
                  // getUserRepos={getUserRepos} 
                  // // user={user} 
                  // repos={repos}
                  // // loading={loading}
                />
              } />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
};

export default App;
