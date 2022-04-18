import React from 'react';
import Button from './Button'
import styled from './App.module.css'

const App = () => {
  return (
    <div>
      <h1 className={styled.title}>Welcome~</h1>
      <Button text={"Continue..."}/>
    </div>
  );
};

export default App;