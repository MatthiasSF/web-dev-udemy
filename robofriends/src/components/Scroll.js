import React from 'react';

/*
Module som ger scrollable content.
overflowY: 'scroll' ger oss möjligheten att rama in content
som använder denna modul och låter oss scrolla det.
Bättre docs om vi håller över overflowY
*/
const Scroll = (props) => {
    return (
        <div style ={{overflowY: 'scroll', border: '1px solid black', 
        height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;