import React from 'react'

import { Conteiner, ConteinerText, Back } from './style'
import { Text } from '../../ui/text'

export const Price = ({ v, i, length }) => {

    return (
        <> 
        <Conteiner>
            <Back length={length - 1 === i? "1px solid rgba(0, 0, 0, 0.2);" : " "} back={ i % 2 === 0 ?  "#fafafa" : "white" } >      
            <ConteinerText 
                width={"100%"}
            >
                <Text  
                    text={v.text} 
                    textAlign={"left"}
                    color={"#666666"}
                    padding={"5px"}
                    size={"16px"}
                    mini={"15px"}
                    small={"14px"}
                />
                  <Text  
                    text={v.price} 
                    textAlign={"right"}
                    color={"#666666"}
                    padding={"5px"}
                    size={"16px"}
                    mini={"15px"}
                    small={"14px"}
                />
            </ConteinerText>
            </Back>
        </Conteiner>
        </>
    )
}