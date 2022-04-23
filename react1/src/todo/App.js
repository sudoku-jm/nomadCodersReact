import React, { useState } from 'react';

const App = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const onChange = (e) => {
        setTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(todo === "") {
            return;
        }
        
        setTodos((currentArray) => [...currentArray, todo]);

        setTodo("");
    }
    return (
        <div>
            <h1>My To Dos ({todos.length})</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={todo} placeholder='write here to do' onChange={onChange}/>
                <button>Add</button>
            </form>
            {
                todos.map( (item,index) => <p key={index}>{item}</p> )
            }
        </div>
    );
};

export default App;