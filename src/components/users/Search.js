import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'; 

const Search = ({ showAlert }) => {
  const githubContext = useContext(GithubContext);
  
  const [text, setText] = useState('');

  // when you don't use an arrow function you have to bind(this)
  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      showAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text); //previously searchUser was passed as prop, not we're getting it from context
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value)
  };

    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={text}
            onChange={onChange}
          />
          <input 
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* if this.props.showClear is true then show the button */}
        {githubContext.users.length > 0 && (
        <button 
          className='btn btn-light btn-block' 
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
        )}
      </div>
    )
}

// in function component propTypes go outside
Search.propTypes = {
  //ptfr shortcut for function proptype
  setAlert: PropTypes.func.isRequired
};

export default Search