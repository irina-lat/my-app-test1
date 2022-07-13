import React, {useState} from "react";
import './Count.css'


function Count() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className={"count"}>
            <h1 className={count === 5 ? 'red' : ''}>{count}</h1>
            <div className={"wrapButton"}>
                <button disabled={count >= 5} onClick={increment}>inc</button>
                <button disabled={count === 0} onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Count