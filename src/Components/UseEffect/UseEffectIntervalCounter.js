import React, { useState, useEffect } from 'react'

function UseEffectIntervalCounter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        };
    }, [])

    const tick = () => {
        setCounter(prevState => {
            return prevState + 1
        })
    }
    return (
        <div>
            <h1>useEffect {counter}</h1>
        </div>
    )
}

export default UseEffectIntervalCounter
