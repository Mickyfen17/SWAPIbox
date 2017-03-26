import React from 'react';
import './Button.css';

const Button = ({ handleClick, title, classNames, active }) => {
  const activeClass = title.toLowerCase() === active ? `active-${active}` : ''
  return(
    <button
      className={ `${classNames} ${activeClass}` }
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