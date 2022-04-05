import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  };
  
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
  searchUsers = async text => {
    this.setState({
      loading: true
    });

    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({
        users: res.data.items, //added .items because the data recieved from API has items property, which is array of users matching query
        loading: false
      });
  };

  // Get single Github user
  getUser = async (username) => {
    this.setState({
      loading: true
    });

    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({
        user: res.data, 
        loading: false
      });
  }

  // Get users repos
  getUserRepos = async (username) => {
    this.setState({
      loading: true
    });

    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      this.setState({
        repos: res.data, 
        loading: false
      });
  }


  // Clear users from state
  clearUsers = () => 
    this.setState({ 
      users: [], 
      loading: false 
    });

  setAlert = (msg, type) => {
    this.setState({
      alert: {msg: msg, type: type} //can also just leave it as msg, type
    });
    setTimeout(() => 
      this.setState({ alert: null }), 1500);
  }; 

  render() {
    const { users, loading, alert, user, repos } = this.state
    return (
      <Router>
      <div>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className='container'>
          <Alert alert={alert} />
          <Routes>
              <Route  
                path='/' 
                element={
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              } />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={
                <User 
                  getUser={this.getUser} 
                  getUserRepos={this.getUserRepos} 
                  user={user} 
                  repos={repos}
                  loading={loading}
                />
              } />
          </Routes>
        </div>
      </div>
      </Router>
    );
  }
};

export default App;
