import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  
  //destructing the props from function means we don't have to 'props.' when calling the props
  
  return (
      <div>
        <h1>
          <i className={icon} />
           {title}
        </h1>
      </div>
    )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar