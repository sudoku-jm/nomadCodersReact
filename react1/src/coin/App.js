import React, { useEffect, useState } from 'react';
import './reset.css'
import styled from './App.module.css'

/* API : https://api.coinpaprika.com/v1/tickers  */
const App = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [selCoin, setSelCoin] = useState({})

    const [priceInfo, setPriceInfo] = useState([])

    useEffect(() => {
        fetch('https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD')
        .then((res) => res.json())
        .then((json) => {
            // console.log(json)
            setPriceInfo(json[0])
        })
    },[])

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setCoins(json)
            setSelCoin(json[0])
            setLoading(false)
        })
    },[])

    const onChange = (e) => {
        const name = e.target.value;
        setSelCoin(coins.find( item =>  name === item.name ))
    }

    console.log('selCoin',selCoin)
    return (
        <div className={styled.wrap}>

            <h1 className={styled.title}>The Coins! ({loading ? "" : coins.length}개) </h1>
            
            {loading ? <strong>Loading...</strong> 
            : 
            <div className={styled.view}>
                <span>변환 코인 선택 : </span>
                <select onChange={onChange}>
                    {coins.map( coin => <option key={coin.id} value={coin.name}>{coin.name} ({coin.symbol}) </option>)}
                </select>

                <p>{priceInfo.date} {priceInfo.time} 기준 달러 환율 : {priceInfo.basePrice} (제공 : {priceInfo.provider})</p>

                <table className={styled.tbl}>
                    <colgroup>
                        <col style={{width:"20%"}}/>
                        <col style={{width:"40%"}}/>
                        <col style={{width:"40%"}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>코인명</th>
                            <th>USD</th>
                            <th>KRW</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>{selCoin.name}</td>
                            <td>{selCoin.quotes.USD.price}</td>
                            <td>{selCoin.quotes.USD.price * priceInfo.basePrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
            
            
            
        </div>
    );
};

export default App;