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
}

export default App;