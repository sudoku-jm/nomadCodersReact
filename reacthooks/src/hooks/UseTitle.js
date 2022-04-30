import React, { useEffect, useState } from 'react';
/* 
Document의 Title을 변경시켜주는 기능.
문서 제목을 업데이트하는 functional hooks의 방식으로 만들어본다.
*/

const useTitle = (initalTitle) => {
    const [title, setTitle] = useState(initalTitle)

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title
    }

    useEffect(updateTitle,[title])

    return setTitle
}

const UseTitle = () => {
    //<title>Loading...</title> 상태
    const titleUpdater = useTitle("Loading...")

    //5초 뒤 <title>HOME</title> 으로 변경
    setTimeout(() => titleUpdater("HOME"), 5000)

    return (
        <div>
            
        </div>
    );
};

export default UseTitle;