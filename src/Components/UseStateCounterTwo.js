import React, { useState } from 'react'
export default function UseStateCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const IncrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevState => prevState + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => IncrementFive()}>Increment 5</button>
        </div>
    )
}
