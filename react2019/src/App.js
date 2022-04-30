<<<<<<< HEAD
import React from "react"
import Potato from "./Potato";
function App() {
  return (
    <div className="App">
      Hello
      <Potato/>
    </div>
  );
=======
import React, { Component } from 'react';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false , book : true});
    },3000)
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
>>>>>>> f4ba78676cd3f597efaad2046ba3e3b92b0f434b
}

export default App;