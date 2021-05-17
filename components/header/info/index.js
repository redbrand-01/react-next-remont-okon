import React from 'react'
import { ConteinerInfo, Count, CallTimeCounteiner } from './style'

import { Logo } from '../../logo'
import { Call } from './call'
import { TimeWork } from './timeWork'

export const Info = () => {

    return (
        <ConteinerInfo img="/header_line.png" >
            <Count>
                <Logo margin={'25px'}/>
                <CallTimeCounteiner>
                    <TimeWork />
                    <Call />
                </CallTimeCounteiner>
            </Count>
         
        </ConteinerInfo>
    )
}