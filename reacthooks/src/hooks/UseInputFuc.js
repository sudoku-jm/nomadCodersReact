import React, { useState } from 'react';

//validator 를 이용하여 입력 검증
const useInput = (initalValue, validator) => {
    const [value, setValue] = useState(initalValue);

    const onChange = event => {
        const{
            target : {value}
        } = event;

        let willUpdate = true;
        if(typeof validator === "function"){
            willUpdate = validator(value)
        }
        
        // console.log(willUpdate)
        
        if(willUpdate){
            setValue(value)
        }
    }
    return {value , onChange};
}
const UseInputFuc = () => {
    //@가 들어가면 글자 입력이 되지 않게함
    const maxLen = (value) => !value.includes("@") 

    //글자수가 10개 이상 입력 막음
    // const maxLen = (value) => value.length <= 10;
    
    const name = useInput("Mr.", maxLen);
    return (
        <div>
            <input placeholder="Name" {...name}/>
        </div>
    );
};

export default UseInputFuc;