import React, { useState } from 'react';

const content = [
    {
        tab : "Section 1",
        content : "I'm the content of the Section 1"
    },
    {
        tab : "Section 2",
        content : "I'm the content of the Section 2"
    },
]
const useTabs = (initalTab, allTabs) => {
    const [currentIndex ,setCurrentIndex] = useState(initalTab)

    //allTab값이 없거나,배열이 아닐 때 리턴
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }

    // console.log('currentIndex',currentIndex)

    return{
        currentItem : allTabs[currentIndex],
        changeItem : setCurrentIndex,
        currentIndex
    }
}

const UseTabsFuc = () => {

    const {currentItem, changeItem,currentIndex} = useTabs(0,content)

    return (
        <div>
            {
                console.log('1',currentIndex)
            }
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} key={index} className={currentIndex == index ? 'on' : ''}>
                    {section.tab}
                </button>)
            )}
            <div>
                {currentItem.content}
            </div>
        </div>
    );
};

export default UseTabsFuc;