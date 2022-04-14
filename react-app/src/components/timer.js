import React, { useEffect, useState } from 'react';


export const Timer = () => {
    const [isRun, setRun] = useState(false);
    const [count, setCount] = useState(0);
    const toggle = () => setRun((val) => !val)

    useEffect(() => {
        let timerID = null;
        // console.log('after mount');
        if (isRun) {
            timerID = setInterval(()=> {
                setCount((val)=> val + 1)
            }, 1000)
        }
        
        return () => {
            clearInterval(timerID)
        }
    }, [isRun])
    return(
    <div>
        <button onClick={toggle}>{isRun ? 'pause' : 'start'}</button>
        <button onClick={()=> setCount(0)}>reset</button>
        <h1>{count}</h1>
    </div>
    )
}
