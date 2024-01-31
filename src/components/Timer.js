// Use effect coponenr

import { useEffect, useState } from "react"



function Timer(){
    const [count, setCount] = useState(1);
    // useEffect(()=>{
    //     console.log('screen Rendered')
    //     //checkCount();
    //     setCount(1)
    // },[count])

    //implementing call back function using setTimeout

    // useEffect(()=>{
    //     console.log('screen Rendered')
    //     //checkCount();
    //     // setCount(1)
    //     setTimeout(()=>{
    //         setCount((previousValue)=> {return previousValue + 1})
    //     },1000)
    // })


    function checkCount(){
        if(count>10){
            setCount(1);
        }
    }

    function updateCount() {
        setCount((previousValue)=>{ return previousValue+1})
    }

  return <>
           <h1>I have render {count} times</h1>
           <button onClick={updateCount}>Increase Count</button>
  </>
 
}

export default Timer;