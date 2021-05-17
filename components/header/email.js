import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import { useSelector } from 'react-redux'
import { EmailConteiner, EmailText } from './style'

import { config } from '../../setting/info'


export const Email = () => {
    const width =  useSelector(state => state.app.width)
    
    if(width < 560) {
        return null
    }

    return (
        <EmailConteiner>
            <EmailIcon style={{color: "white", marginRight: 5, fontSize: 17 }}/>
            <EmailText>
                {config.email}
            </EmailText>
        </EmailConteiner>
    )
}