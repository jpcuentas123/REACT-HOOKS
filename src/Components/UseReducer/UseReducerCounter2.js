import React, { useReducer } from 'react'


function UseReducerCounter2() {
    const initialState = {
        firstCounter: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return {firstCounter: state.firstCounter + action.payload}
            case "Decrement":
                return {firstCounter: state.firstCounter - action.payload}
            case "Reset":
                return initialState
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count {count.firstCounter}</h1>
            <button onClick={()=>dispatch({type:"Increment",payload:2})}>Increment +2</button>
            <button onClick={()=>dispatch({type:"Decrement",payload:2})}>Decrement -2</button>
            <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
        </div>
    )
}

export default UseReducerCounter2
