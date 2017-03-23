import React from 'react';
import './Buttons.css';

const Buttons = ({ handleClick }) => {
  return(
    <div className='buttons-wrapper'>
      <button className='filter-buttons'
              onClick={() => handleClick('people') }>
        People
      </button>
      <button className='filter-buttons'
              onClick={() => handleClick('planets') }>
        Planets
      </button>
      <button className='filter-buttons'
              onClick={() => handleClick('vehicles') }>
        Vehicles
      </button>
    </div>
  )
}

Buttons.propTypes = {
  handleClick: React.PropTypes.func.isRequired


export default Buttons
