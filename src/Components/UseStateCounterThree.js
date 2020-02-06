import React, { useState } from 'react'

export default function UseStateCounterThree() {
    const initialState = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(initialState)
    return (
        <div>
            Firt name {name.firstName} Last name: {name.lastName}
            <input onInput={(e) => setName({...name, firstName: e.target.value})} type="Text"/>
            <input onInput={(e) => setName({...name, lastName: e.target.value })} type="text" />
        </div>
    )
}