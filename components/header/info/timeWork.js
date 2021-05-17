import React from 'react'
import { TimeWorkConteiner, TimeConteiner, Text } from './style'
import { useSelector } from 'react-redux'

import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { config } from '../../../setting/info'

export const TimeWork = () => {
    const width =  useSelector(state => state.app.width)

    return (
        <TimeWorkConteiner>
            <AccessTimeIcon style={{ fontSize: width> 1030? 50 : 40, color: "#ffb300", marginRight: 5}} />
            <TimeConteiner>
                <Text color={"white"} size={"18px"} small={"14px"}>{config.textwork}</Text>
                <Text color={"white"} size={"24px"} small={"20px"}>{config.work}</Text>
            </TimeConteiner>
        </TimeWorkConteiner>
    )
}