import React from 'react';
import {UsePreventLeave} from "./UsePreventLeave"

const UsePreventLeaveJsx = () => {
    const {enablePrevent, disablePrevent} = UsePreventLeave();
    
    return (
        <div>

            {/* 클릭 시 한번 더 확인창 작동*/}
            <button onClick={enablePrevent}>Protect</button>

            {/* 확인창 이벤트 삭제 */}
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

export default UsePreventLeaveJsx;