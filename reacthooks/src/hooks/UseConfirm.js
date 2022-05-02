import React from 'react';

/* 
사용자가 무언가를 하기전에 (확인)하는 것. 알림이나 메세지 같은 것
*/


export const UseConfirm = (message = "", onConfirm, onCancel) => {
    //onConfirm이 존재하지 않거나 + 타입이 함수형으로 안왔을 경우 return
    if(!onConfirm && typeof onConfirm !== "function"){
        return;
    }
    //onCancel이 존재하는지 확인 + 타입이 함수형으로 왔는지?
    if(onCancel && typeof onCancel !== "function"){
        return;
    }

    const confirmAction = () => {
        if(window.confirm(message)){ //확인 
            onConfirm();
        }else{ //취소
            onCancel();
        }
    }

    return confirmAction;
};

