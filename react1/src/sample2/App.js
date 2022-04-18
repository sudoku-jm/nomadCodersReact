import React, { useEffect, useState } from 'react';

const App = () => {
    const [keyword, setKeyword] = useState('')

    const onChange = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        if(keyword !== "" && keyword.length > 0){
            console.log("keyword",keyword)
        }
    },[keyword])

    return (
        <div>
            <input type="text" value={keyword} placeholder="search here..." onChange={onChange}/>
            
        </div>
    );
};

export default App;