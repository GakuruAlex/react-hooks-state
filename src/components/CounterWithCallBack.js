import { useState } from "react";

function CounterWithCallBack() {
    const[counterInCallBack,setCounterInCallBack]=useState(0);

    function incrementCounter(){

   setCounterInCallBack((counterInCallBack)=>counterInCallBack+1)
   setCounterInCallBack((counterInCallBack)=>counterInCallBack+1)

    console.log("Counter in callback function is :",counterInCallBack);
   }


    return (
     <button onClick={incrementCounter}>Counter using callback function{counterInCallBack}</button>
     );

}

export default CounterWithCallBack;