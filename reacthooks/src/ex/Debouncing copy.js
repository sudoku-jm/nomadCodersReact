import React, { useEffect, useState } from 'react';
import axios from "axios"

const UseAxios = (opts, axiosInstance = axios) => {
    const [state, setState] = useState({
        loading : true,
        error : null,
        data : null,
    })
    
    //refetch를 위한 트리거
    const [trigger, setTrigger] = useState(0)
    const refetch = () => {
        setState({
            ...state,
            loading : true,
        })
        /*
        기본적으로 new Date()실행 시 이상한 숫자를 실행한다.

        <예>
        new Date() 
        Wed May 11 2022 21:13:50 GMT+0900 (한국 표준시)

        new Date().toDateString()
        'Wed May 11 2022'

        Date.now()
        1652271292504
        */
        setTrigger(Date.now())  //랜덤 숫자 들어감.
        //trigger는 바뀌면 useEffect는 다시 실행 => refetch 실행!
    }


    useEffect(() => {

        if(!opts .url){
            return;
        }

        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading : false,
                data
            })
        }).catch(error => {
            setState({
                ...state,
                loading : false,
                error
            })
        })

    },[trigger])

    //state와 새로운 refetch function 리턴.
    return {...state, refetch};
};

const Debouncing = () => {
    const {loading, error, data, refetch} = UseAxios({url :" https://yts.mx/api/v2/list_movies.json"});

    const [text, setText] = useState('')
    const [timer, setTimer] = useState(0); // 디바운싱 타이머


    const onChangeInputs = async (e) => {
        const {value} = e.target
        setText(value) //클라이언트 데이터 바로 변경.

        //디바운싱 - 마지막 호출만 적용
        if(timer){
            console.log('클리어 타이머')
            clearTimeout(timer)
        }

        const newTimer = setTimeout(async() => {
            try{
                // await refetch() //현재 API refetch만 하는 상황.
                console.log(await e.targel.value)
            }catch(event){
                console.log('error',event)
            }
        },800)
        
        setTimer(newTimer)
    }

    return (
        <div>
            
            <input type="text" value={text} onChange={onChangeInputs}/>

        </div>
    );
};

export default Debouncing;