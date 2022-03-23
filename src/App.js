import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }
  
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    //while the date is being fetched set loading to true
    //can combine this with a conditional for a spinner
    this.setState({
      loading: true
    });

    const res = await axios
      .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      // .then not needed when using async await
      // .then(res => console.log(res.data));
      // after data is fetched update the state and set loading back to false
      this.setState({
        users: res.data,
        loading: false
      });
  };

  render() {
    return (
      <div>
        <nav className='navbar bg-primary'>
          <Navbar title='Github Finder' icon='fab fa-github' />
        </nav>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
};

export default App;
