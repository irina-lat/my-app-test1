import React, {useState} from "react";
import './Count.css'


function Count2() {

    const [count, setCount] = useState(0)

    const [incrementDisabled, setIncrementDisabled] = useState(false)
    const [resetDisabled, setResetDisabled] = useState(true)

    const increment = () => {
        const newCount = count + 1
        setCount(newCount)
        if (newCount === 5) {
            setIncrementDisabled(true)
        }
        if (resetDisabled) {
            setResetDisabled(false)
        }
    }

    const reset = () => {
        setCount(0)
        setIncrementDisabled(false)
        setResetDisabled(true)
    }

    return (
        <div className={"count"}>
            <h1 className={count === 5 ? 'red' : ''}>{count}</h1>
            <div className={"wrapButton"}>
                <button disabled={incrementDisabled} onClick={increment}>inc</button>
                <button disabled={resetDisabled} onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Count2