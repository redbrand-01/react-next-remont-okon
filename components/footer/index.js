import React from 'react'

import { Conteiner, Count, Text } from './style'

import { Logo } from '../logo'
import { Contacts } from './contacts'

import { config } from '../../setting/footer'

export const FooterComponent = () => {
    return (
        <Conteiner>
            <Count>
                <Logo margin={'0px'}/>
                <Text size={"18px"} color={"#cccccc"} small={"14px"} indent={"20px"} >
                    {config.logotext}
                </Text>
            </Count>
            <Count>
                <Contacts />
            </Count>
        </Conteiner>
    )
}