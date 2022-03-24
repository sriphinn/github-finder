import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    //ptfr shortcut for function proptype
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  // when you don't use an arrow function you have to bind(this)
  onSubmit(e) {
    e.preventDefault();
    if(this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };
  // can also write it this way
  // onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    // destructure to pull out this.props from props showClear and clearuser
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input 
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* if this.props.showClear is true then show the button */}
        {showClear && (
        <button 
          className='btn btn-light btn-block' 
          onClick={clearUsers}
        >
          Clear
        </button>
        )}
      </div>
    )
  }
}

export default Search