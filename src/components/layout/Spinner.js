//racf -function component shortcut
import React, {Fragment} from 'react'
import spinner from './spinner.gif';

// with arrow functions, if there's no other javascript, 'return' not necessary
const Spinner = () => <Fragment>
  <img 
    src={spinner} 
    alt='Loading...'
    style={{ width: '200px', margin: 'auto', display: 'block' }} />
  </Fragment>

export default Spinner;
