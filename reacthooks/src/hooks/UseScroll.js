import React, { useEffect, useState } from 'react';

const UseScroll = () => {
    const [state, setState] = useState({
        x : 0,
        y : 0
    })
    const onScroll = () => {
        console.log("y : ",window.scrollY , ",x : ",window.scrollX)
        setState({
            x : window.scrollX,
            y : window.scrollY
        })
        //event를 추가했으면 같은 이름과 같은  handler로 지워야 한다는 것을 기억할 것.
        return() => window.removeEventListener("scroll",onScroll)
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
    },[])
    return state;
};

const UseScrollJsx = () => {
    const {y} = UseScroll();
    return (
        <div className="App" style={{height:"1000vh"}}>
            <h1 
            style={{ 
                position: "fixed",
                color : y > 100 ? "red" : "blue"}}>
                Hi
            </h1>
        </div>
    );

}

export default UseScrollJsx;