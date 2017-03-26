import React from 'react';
import './Button.css';

const Button = ({ handleClick, title }) => {
  return(
    <button
      className='filter-buttons'
      onClick={() => handleClick({ title }) }>
      { title }
    </button>
  )
}


Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};

export default Button;
