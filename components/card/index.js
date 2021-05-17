import React from 'react'

import { Box } from './card'

import { CardConteiner } from './style'

export const Card = ({ card }) => {

    return (
        <CardConteiner>
            {
                card.map((v, i) => {
                    return <Box key={i} v={v} />
                })
            }
        </CardConteiner>
    )
}