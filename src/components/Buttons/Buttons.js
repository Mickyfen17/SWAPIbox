import React from 'react';
import './Buttons.css';

const Buttons = ({ handleClick }) => {
  return(
    <div>
      <button onClick={() => handleClick('people') }>People</button>
      <button onClick={() => handleClick('planets') }>Planets</button>
      <button onClick={() => handleClick('vehicles') }>Vehicles</button>
    </div>
  )

}

export default Buttons;
