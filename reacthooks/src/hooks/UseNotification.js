import React, { useEffect } from 'react';
/*  알람이 실행되는 function 만들기 */
/* 
    Notification API 활용
    https://developer.mozilla.org/ko/docs/Web/API/notification

    https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification



    ##Properties

    Notification.permission
    : 알림을 표시하기 위한 현재의 권한을 나타낸다. 
    가능한 값: denied (사용자가 알림 표시를 거절), 
    granted (사용자가 알림 표시를 허용), 
    default (사용자의 선택을 알 수 없기 때문에 브라우저가 거절한 상태의 값으로 작동하게됨).

    granted: 사용자가 의도하여 어플리케이션이 알림을 보낼 수 있도록 허가.
    denied: 사용자가 의도하여 어플리케이션이 알림을 보내는 것을 거부.
    default: 사용자의 결정은 알 수 없으나, 어플리케이션 기본적으로 denied 와 같이 동작할 것 입니다.
*/
const UseNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }

    const fireNotif = () => {
        if(Notification.permission !== "granted"){
            Notification.requestPermission().then(permission => {
                if(permission === "granted"){
                    new Notification(title, options)
                }else{
                    return;
                }
            });
        }else{
            new Notification(title, options)
        }
    }

    return fireNotif;
};


const UseNotificationJsx = () => {
    const fireNotif = UseNotification("Can I steal your potato?",{
        body : "I love potato dont you?",
        icon : "https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fimgauto-phinf.pstatic.net%2F20220314_111%2Fauto_1647235356458v0a0W_PNG%2F20220314142224_tDDPBnKJ.png%22&type=mfullfill358_168_white",
        silent: true, //소리 off
    });
    return (
        <div>
            UseNotificationJsx
            <button onClick={fireNotif}>Hello~</button>
        </div>
    );
}

export default UseNotificationJsx;