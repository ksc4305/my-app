import React, {useState} from "react";
// use state -> 동적값(변하는) 사용할 때 사용

const Counter = () => {
    const [num, setNumber] = useState(0);
    //== const num = 0;


    const increase = () => {
        setNumber(num+1);
        //== num+=1
    }
    const decrease = () => {
        setNumber(num-1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;
