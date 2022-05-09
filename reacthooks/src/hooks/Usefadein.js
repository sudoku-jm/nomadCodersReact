import React, { useEffect, useRef } from 'react';

/* 
element자동으로 서서히 나타나게 만듦
지연시키거나 등등..
hooks와 animation을 접목.
*/

//기본 1초, 딜레이 0초
export const Usefadein = (duration = 1, delay = 0) => {
    const element = useRef();
    /* 
    element의 opacity의 기본값을 0으로 설정.
    */
   useEffect(() => {
       //타입 숫자가 아니면 리턴.
       if(typeof duration !== "number" || typeof delay !== "number"){
           return;
       }
        if(element.current){
            const {current} = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
   },[])
   return {
       ref : element, 
       style : { opacity : 0 }
    };
};
