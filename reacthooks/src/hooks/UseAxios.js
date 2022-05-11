import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const UseAxiosJsx = () => {
    const {loading, error, data, refetch} = UseAxios({url :" https://yts.mx/api/v2/list_movies.json"});

    // console.log(`loading : ${loading} \nerror : ${error} \ndata : ${JSON.stringify(data)}`)

    //디바운싱(debouncing)
    // let timer;
    // const [text, setText] = useState('')
    // const inputChange = (e) => {
    //     const {value} = e.target
    //     setText(value)
    //     if(timer){
    //         clearTimeout(timer)
    //     }
    //     timer = setTimeout(() => {
    //         refetch()
    //         console.log(value)
    //     },500)
    // }

    // 쓰로틀링(throttling)
    // let timer
    // const [text, setText] = useState('')
    // const inputChange = (e) => {
    //     const {value} = e.target
    //     setText(value)
    //     if(!timer){
    //         timer = setTimeout(() => {
    //             timer = null
    //             refetch()
    //             console.log(value)
    //         },1000)
    //     }
    // }


    return (
        <div>
            <h1>UseAxios</h1>
            <p>{data && data.status}</p>
            <p>{loading && "loading..." }</p>
            클릭 시 다시 로딩
            {/* <input type="text" value={text} onChange={inputChange}/> */}
            <button onClick={refetch}>Refetch</button>
        </div>
    );
};

export default UseAxiosJsx;