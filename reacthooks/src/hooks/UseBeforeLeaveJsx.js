import React from 'react';
import { UseBeforeLeave } from './UseBeforeLeave';


const UseBeforeLeaveJsx = () => {
    const begForLife = () => console.log("plz don't leave~~")
    UseBeforeLeave(begForLife)
    return (
        <div>
            <h1> window에 마우스가 벗어나면 이벤트 작동 : 콘솔 창 "plz don't leave~~"</h1>
        </div>
    );
};

export default UseBeforeLeaveJsx;