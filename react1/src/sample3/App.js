import React, { useEffect, useState } from 'react';

function Hello(){
    const effectFn = () =>{
        console.log('Im created!')
        return distroyFn;
    }
    const distroyFn = () =>{
        console.log('Im distroyed!')
    }
    useEffect(effectFn,[]);
    return <h1>Hello</h1>
}

const App = () => {
    const [showing, setShowing] = useState(false)
    const onClick = () => {
        setShowing((prev) => !prev)
    }
    return (
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
};

export default App;