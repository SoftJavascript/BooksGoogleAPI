import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';

function ProgressBar() {

  const [countOne, setCountOne] = useState({value: 0, btnColor: 'success', increment: 25});
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'danger', increment: 20});

  const incrementCountOne = useCallback((val) => {countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})},[countOne])
  const incrementCountTwo = useCallback((val) => {countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})},[countTwo])
  
  return (
    <div className="container mt-5">
      
      <Count count={countOne.value} bgColor={countOne.btnColor} />
      <Button  handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count1</Button>

      <Count count={countTwo.value} bgColor={countTwo.btnColor} />
      <Button  handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count2</Button>
    </div>
  );
}

export default ProgressBar;