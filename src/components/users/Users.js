import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  // constructor and super isn't really needed, can just define state
  // constructor() {
  //   super();
  // state no longer needed, now fetching data in App
  if(loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {/* by destructuring the props, dont need 'this.props' */}
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

// Style object similar to using an inline style
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users