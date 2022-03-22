import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar bg-primary'>
          <Navbar title='Github Finder' icon='fab fa-github' />
        </nav>
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
};

export default App;
