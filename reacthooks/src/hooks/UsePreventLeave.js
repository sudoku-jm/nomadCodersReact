import React from 'react';

/* 
window를 닫을 때 "아직 저장하지 않았어!"라고 뜨게 해주는 것.
*/

export const UsePreventLeave = () => {
    //API에 뭔가 보내고 사람들이 닫지 않기를 바란다면 보호할 수 있게 활성화.
    //API에 보내고 닫아도 신경쓰지 않아도 된다면 보호 활성화 시키지 않아도 됨.
    
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }

    const enablePrevent = () => {window.addEventListener("beforeunload",listener)}
    const disablePrevent = () =>{window.removeEventListener("beforeunload",listener)}

    return {enablePrevent,disablePrevent}
};
