import React, { useState, useEffect } from 'react'

function UseEffectMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect call');
        window.addEventListener("mousemove",logMousePosition)
        return () => {
            console.log("Component Unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            X - {x} | Y - {y}
        </div>
    )
}

export default UseEffectMouse
