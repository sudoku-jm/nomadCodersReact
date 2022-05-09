import React from 'react';
import { Usefadein } from './Usefadein';

const UsefadeinJsx = () => {
    const fadeInH1 = Usefadein(1,3)
    const fadeInP = Usefadein(5,5);
    return (
        <div>
            <h1 {...fadeInH1}>UseFadeIn</h1>
            <p {...fadeInP}>아무 텍스트1</p>
        </div>
    );
};

export default UsefadeinJsx;