import { useState, useEffect } from "react";

const Counter = () => {
    const [myCounter, setMyCounter] = useState(0);
    let c = 0;

    return <>
        <button onClick={setMyCounter(c++)}>Click</button>
        <div>{c}</div>
    </>


}
export default Counter;