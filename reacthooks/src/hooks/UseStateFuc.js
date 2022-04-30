import React, { useState } from 'react';

const useStateFuc = () => {
  const [item, setItem] = useState(1)
  const incrementItem = () => {
    setItem(item + 1);
  }
  const decrementItem = () => {
    setItem(item - 1)
  }
  return (
    <div>
      Hello {item} 
      <button onClick={incrementItem}>Incremenet</button>
      <button onClick={decrementItem}>Decremenet</button>
    </div>
  );
};

export default useStateFuc;