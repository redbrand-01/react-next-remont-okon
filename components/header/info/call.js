import React from 'react'
import { CallConteiner, Text } from './style'
import { useSelector } from 'react-redux'

import PhoneIcon from '@material-ui/icons/Phone';

import { config } from '../../../setting/info'

export const Call = () => {

    const width =  useSelector(state => state.app.width)

    return (
        <CallConteiner>
            <Text color={"white"} size={'30px'} small={"20px"}>
                <PhoneIcon style={{color: "white", fontSize: width > 1030? 30 : 20}} />
                    {config.phonetext}
            </Text>
            {
                width > 780 ?
                <Text color={"#ffb300"} size={'40px'} small={"25px"}>
                    {config.phone}
                </Text>
                :
                <a href={"tel:" + config.call} >
                    <Text color={"#ffb300"} size={'40px'} small={"25px"}>
                        {config.phone}
                    </Text>
                </a>
            }

        </CallConteiner>
    )
}