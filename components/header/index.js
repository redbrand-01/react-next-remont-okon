import React from 'react'

import { Email } from './email'
import { Social } from './social'
import { Info } from './info'
import { Navigation } from  './navigation'

import { Conteiner, Count } from './style'

export const HeaderComponent = () => {
    return (
        <>
        <Conteiner>
        
          <Count>
            <Email />
            <Social/> 
          </Count>
        </Conteiner>
        <Info />
        <Navigation />
        </>
    )
}