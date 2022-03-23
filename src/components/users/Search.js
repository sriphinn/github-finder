import React, { Component } from 'react'

class Search extends Component {
  state = {
    text: ''
  };

  // when you don't use an arrow function you have to bind(this)
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };
  // can also write it this way
  // onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
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
      </div>
    )
  }
}

export default Search