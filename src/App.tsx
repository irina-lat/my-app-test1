import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';


function App() {

    const [count, setCount] = useState(0)
    const [startCount, setStartCount] = useState(0)
    const [maxCount, setMaxCount] = useState(0)
    const [status, setStatus] = useState(false)
    const [error, setError] = useState('')

    const addValue = () => {
        setStatus(true)
        setCount(startCount)
        setError('')
    }

    useEffect(()=> {
        let countString = localStorage.getItem('count')
        if (countString) {
            let newCount = JSON.parse(countString)
            setCount(newCount)
        }
    }, [])

    useEffect( ()=> {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    const changeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        setStartCount(value)
        if (value >= maxCount || value < 0) {
            setError('Incorrect Value')
        } else {
            setError('EnterValue, press set')
        }

    }

    const changeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
        let value = +event.currentTarget.value
        setMaxCount(value)
        if (value <= startCount || value < 0) {
            setError('Incorrect Value')
        } else {
            setError('EnterValue, press set')
        }
    }

    let inputStartCount = startCount < 0 || startCount > maxCount || startCount === maxCount ? 'InputError' : ''
    let inputMaxCount = maxCount < 0 || maxCount > maxCount || startCount === maxCount ? 'InputError' : ''
    let counterClass = error === 'Incorect Value' || count === startCount || count === maxCount ? 'counter-out-more' : 'counter-out'

    return (

        <div className="App">
            <div className='set'>
                <h3>Counter set</h3>
                <div className='counter-out'>
                    <div>
                        max value: <input type={'number'} onChange={changeMaxValue}/>
                    </div>
                    <div>
                        start value: <input type={'number'} onChange={changeStartValue}/>
                    </div>
                </div>
                <div className='btns'>
                    <button className='setBtn' onClick={addValue} disabled={error === 'Incorrect value'}>SET</button>
                </div>
            </div>
            <div className='show'>
                <h3>Counter show</h3>
                <div className={counterClass}>{error ? error : count }</div>
                <div className='btns-container'>
                    <button className='counter' onClick={() => setCount(count + 1)} disabled={count === maxCount || !status}>plus
                    </button>
                    <button className='reset' onClick={() => setCount(startCount)}
                            disabled={count === startCount || !status}>reset
                    </button>
                </div>
            </div>
        </div>
    );
}


export default App;
