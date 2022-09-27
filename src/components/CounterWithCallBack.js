import { useState } from "react";

function CounterWithCallBack() {
    const[counterInCallBack,setCounterInCallBack]=useState(0);

    function incrementCounter(){
   setCounterInCallBack((currentCount)=>{
currentCount=+1;
console.log("Counter in callBack is ",currentCount);
return currentCount;
   })

    }
    return (
     <button onClick={incrementCounter}>Counter using callback function{counterInCallBack}</button>
     );
}

export default CounterWithCallBack;