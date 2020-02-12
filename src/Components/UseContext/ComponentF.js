import React from 'react'
import { UserContext, ChannelContext } from '../../App'
function ComponentF() {
    return (
        <UserContext.Consumer>
            {
                users => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return (
                                        <div>
                                            <div>
                                                <h3>ComponentF</h3>
                                            </div>
                                            <h4>Welcom {users[0].name} across the channel {channel}</h4>
                                        </div>
                                    )
                                }
                            }

                        </ChannelContext.Consumer>

                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default ComponentF
