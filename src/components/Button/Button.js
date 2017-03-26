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
  handleClick: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Button;
