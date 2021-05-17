import React from 'react'
import { ImgTitle } from './imgTitle'

import { Conteiner, CardConteiner } from './style'
import { Card } from '../card'

export const PriceTitle = ({ title, card, back }) => {
    return (
        <Conteiner back={back} >
         <ImgTitle title={title}/>
         <CardConteiner>
            <Card card={card}/>
         </CardConteiner>
        </Conteiner>
    )
}