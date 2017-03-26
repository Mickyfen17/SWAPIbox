import React from 'react';
import './Button.css';

const Button = ({ handleClick, title, classNames }) => {
  return(
    <button
      className={ classNames }
      onClick={ () => handleClick(title) }>
      { title }
    </button>
  )
}


Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Button;