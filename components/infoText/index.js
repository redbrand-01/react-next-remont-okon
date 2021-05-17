import React from 'react'

import { Conteiner, Back, TextConteiner, Title } from './style'
import { Text } from '../ui/text'


export const InfoText = ({ info }) => {
    return (
        <Conteiner>
            <Back>
            {
                info.map((v, i) => {
                    return (  
                        <TextConteiner key={i}>
                            <Title>
                                {v.title}
                            </Title>
                            <Text padding={"0px"} size="14px" mini="12px" small="12px" textAlign="left" text={v.text} />
                        </TextConteiner>
                    )
                })
            }
            </Back>
        </Conteiner>
    )
}