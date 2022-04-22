import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext'; //bring it in with upper case G and initialize below with lowercase

const Users = () => {
  // constructor and super isn't really needed, can just define state
  // constructor() {
  //   super();
  // state no longer needed, now fetching data in App
  const githubContext = useContext(GithubContext);
  
  const { loading, users } = githubContext;

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
};

// prop types no longer needed because we're not using props. now getting value from context
// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading: PropTypes.bool.isRequired
// };

// Style object similar to using an inline style
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users