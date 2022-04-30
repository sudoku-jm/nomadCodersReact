import React from 'react';

class UseStateClass extends React.Component{
    state = {
        item : 1
    }
    render(){
        const {item} = this.state;
        return(
            <div>
                Hello {item} 
                <button onClick={this.incrementItem}>Incremenet</button>
                <button onClick={this.decrementItem}>Decremenet</button>
            </div>
        )
    }

    incrementItem = () =>{
        this.setState(state => {
            return {
                item :state.item + 1
            }
        })
    }

    decrementItem = () => {
        this.setState(state => {
            return{
                item : state.item - 1
            }
        })
    }
}

export default UseStateClass;