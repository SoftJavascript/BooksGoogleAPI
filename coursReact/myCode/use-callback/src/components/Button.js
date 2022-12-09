import React from 'react';

function Button({handleClick, btnColor, increment, children}) {
  
  return <button onClick={() => handleClick(increment)} className={`m-3 btn btn-${btnColor}`}>{`+ ${increment}%`}</button>
}

export default Button;