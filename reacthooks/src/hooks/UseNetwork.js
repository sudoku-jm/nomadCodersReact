import React, { useEffect, useState } from 'react';
/* 
useNetWork는 navigator가 online 또는 offline이 되는 걸 막아준다.

[F12] 개발자도구 > Network

*/

//Network 상태가 바뀔 때마다
export const UseNetwork = (onChange) => {

    //기본값 navigator.online 
    //navigator.online는 true 또는 false로 결과가 나옴.
    //navigator가 online인지 아닌지 확인할 수 있다.
    const [status ,setStatus] = useState(navigator.online)

    const handleChange = () => {
        console.log('dd')
        if(typeof onChange == "function"){
            onChange(navigator.online)
        }
        setStatus(navigator.online)
        //online 상태라면 상태 변경. setStatus의 navigator의 online은 offline이 된다. 반대의 경우는 online
    }

    useEffect(()=>{
        window.addEventListener('online',handleChange)
        window.addEventListener('offline',handleChange)
        
        //클린업
        return () => {
            window.removeEventListener('online',handleChange)
            window.removeEventListener('offline',handleChange)
        }
    },[])



    return status;
};

