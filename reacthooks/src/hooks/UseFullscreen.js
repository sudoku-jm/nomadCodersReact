import React, { useRef } from 'react';

const UseFullscreen = (callback) => {
    const element = useRef();

    const runCallback = isFull => {
        if(callback && typeof callback === "function"){
            callback(isFull)
        }
    }

    const triggerFull = () => {
        if(element.current){
            if(element.current.requestFullscreen){
                element.current.requestFullscreen();
            }else if(element.current.mozRequestFullScreen){ //firefox
                element.current.mozRequestFullScreen();
            }else if(element.current.webkitRequestFullscreen){ //opera
                element.current.webkitRequestFullscreen();
            }else if(element.current.msRequestFullscreen){ //microsoft
                element.current.msRequestFullscreen();
            }
            runCallback(true)
        }
    }
    const exitFull = () => {
        const checkFullScreen = document.fullscreenElement;
        if (checkFullScreen !== null) {
            if(document.exitFullscreen()){
                document.exitFullscreen();
            }else if(document.mozCancelFullScreen){ //firefox
                document.mozCancelFullScreen();
            }else if(document.webkitExitFullscreen){ //opera
                document.webkitExitFullscreen();
            }else if(document.msExitFullscreen){ //microsoft
                document.msExitFullscreen();
            }
            runCallback(false)
        }
    }
    return {element, triggerFull, exitFull};
};

const UseFullscreenJsx = () => {
    const onFulls = (isFull) => {
        console.log(isFull ? "We are full" : "We are small")
    }
    const {element, triggerFull, exitFull} = UseFullscreen(onFulls);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element} >
                <img 
                src="https://i.ibb.co/R6RwNxx/grape.jpg" 
                alt="grape" 
                width="250"/>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
            <button onClick={exitFull}>Exit Fullscreen</button>
            {/* 어떤 element를 얻으면 fullscreen으로 만들어준다 */}
        </div>
    );
}

export default UseFullscreenJsx;