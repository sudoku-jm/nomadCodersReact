import React from 'react';
import { UseNetwork } from './UseNetwork';

const UseNetworkJsx = () => {
    /* network가 바뀔때 function이 작동되게 한다 */
    const handleNetworkChange = (online) => {
        console.log(online? "we just went online" : "we are offline")
    }
    const onLine = UseNetwork(handleNetworkChange);
    return (
        <div>
            <h1>{onLine ? 'online' : 'offline'}</h1>
        </div>
    );
};

export default UseNetworkJsx;