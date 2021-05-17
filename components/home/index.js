import React from 'react'
import { Conteiner, ConteinerGalery } from './style'
import { ListPrice } from '../listPrice'

import { Title } from '../ui/title'
import { Text } from '../ui/text'
import { Card } from '../card'
import { Gallery } from '../gallery'
import { HomePrice, HomeTitle } from '../../PRICE/home'
export const HomeComponents = ({ 
    tileData, 
    tileDataMini, 
    tileDataSize, 
    tileDataMiniSize, 
    card,
    titleCard,
    titleGallety
}) => {
    return (
        <>
        <Conteiner>
            <Title title={titleCard.title} />
            <Text text={titleCard.sub} />
            <Card card={card}/>
        </Conteiner>
        <ListPrice title={HomeTitle} price={HomePrice} />
        <ConteinerGalery>
            <Title title={titleGallety.title} />
            <Text text={titleGallety.sub} />
            <Gallery tileData={tileData} size={tileDataSize}/>
            <Gallery tileData={tileDataMini} size={tileDataMiniSize}/>
        </ConteinerGalery>
        </>
    )
}