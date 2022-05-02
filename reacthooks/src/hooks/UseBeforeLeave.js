import React, { useEffect } from 'react';

// 기본적으로 tab을 닫을 때 실행되는 function
//예 : 마우스가 벗어나면 fuction실행


export const UseBeforeLeave = (onBefore) => {
    const handle = (event) => {
        // console.log(event)
        const {clientY} = event;
        if(clientY <= 0){
            //마우스가 위로 올라갈 때만 작동
            onBefore();
        }
        // console.log("leaving")
    }


    useEffect(() => {
        if(typeof onBefore !== "function"){
            return
        }
        //이벤트 진입 : 실행
        document.addEventListener("mouseleave",handle)

        //componentWillUnMount 상태: 이벤트 삭제
        return () => document.removeEventListener("mouseleave",handle)

    },[])
    
};
