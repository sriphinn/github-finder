import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  // constructor and super isn't really needed, can just define state
  // constructor() {
  //   super();
  // state no longer needed, now fetching data in App

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

// Style object similar to using an inline style
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users