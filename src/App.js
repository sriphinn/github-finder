import './App.css';
import React from 'react';
import Navbar from './components/layout/Navbar';

class App extends React.Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <Navbar title='Github Finder' icon='fab fa-github' />
      </nav>
    );
  }

}

export default App;
