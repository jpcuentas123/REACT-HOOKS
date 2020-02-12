import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../../App'


function ComponentE() {
    const users = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            <h2>ComponentE</h2>
            <h4>Welcom to ComponentE {users[0].name} across the channel {channel}</h4>
            <ComponentF />
        </div>
    )
}

export default ComponentE
