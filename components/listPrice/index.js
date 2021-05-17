import React from 'react'

import { Title } from '../ui/title'
import { Text } from '../ui/text'

import { Price } from './price'

import { Conteiner } from './style'

export const ListPrice = ({ title = false, price }) => {
    return (
        <Conteiner>
            {
                !!title.title?
                <Title title={title.title}/>
                : null
            }
            
            <Text text={title.sub} />
            {
                price.map((v, i) => {
                    return <Price key={i} v={v} i={i} length={price.length}/>
                })
            }
            
        </Conteiner>
    )
}