import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
    
    
    const element = useRef()
    
    useEffect(() => {
        if( typeof onClick !== "function"){
            return;
        }
        if(element.current){
            element.current.addEventListener("click", onClick)
        }
        

        //componentWillUnMount
        return () => {
            if(element.current){

                element.current.removeEventListener("click", onClick)
            }

        }
    },[])

    return element
}

const UseClick = () => {
    const sayHello = () => {
        console.log("say Hello")
    }
    const title = useClick(sayHello)
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
};

export default UseClick;