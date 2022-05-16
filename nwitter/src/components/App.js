import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from "fBase";

const App = () => {
  // console.log(authService.currentUser)
  //기본값 false
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); 
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  )
};

export default App;