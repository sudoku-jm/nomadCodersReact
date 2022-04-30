import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
    const [number, setNumber] = useState(0)
    const [aNumber, setANumber] = useState(0)
    

    const sayHello = () => {
        console.log("hello?")
    }

    //방법1
    //useEffect(sayHello,[])    // 뭘 누르던 해당 화면 나오고 1번만 실행
    useEffect(sayHello,[number])    //number가 바뀔때만 sayHello 실행


    /*
        useEffect는
        ComponentDidMount,
        ComponentWillUnMount,
        ComponentDidUpdate다
    */

    return (
        <div>
            <h1>useEffect</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
};

export default UseEffect1;