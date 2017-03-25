import React from 'react';
import './Button.css';

const Button = ({ handleClick, name }) => {
  return(
    <button
      className='filter-buttons'
      onClick={ () => handleClick(name) }>
      { name }
    </button>
  )
}


Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};

export default Button;
