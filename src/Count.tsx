import React, {useState} from "react";
import './Count.css'


function Count() {

    let [count, setCount] = useState(0)

    const [incrementButton, setIncrementButton] = useState(false)
    const [resetButton, setResetButton] = useState(true)

    const increment = () => {
        const newCount = count + 1
        setCount(newCount)
        if (newCount === 5) {
            setIncrementButton(true)
        }
        if (resetButton) {
            setResetButton(false)
        }
    }

    const reset = () => {
        setCount(0)
        setIncrementButton(false)
        setResetButton(true)
    }

    return (
        <div className={"count"}>
            <h1 className={count === 5 ? 'red' : ''}>{count}</h1>
            <div className={"wrapButton"}>
                <button disabled={incrementButton} onClick={increment}>inc</button>
                <button disabled={resetButton} onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Count