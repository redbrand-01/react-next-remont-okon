import React from 'react'

import { Back, Conteiner, TitleCont } from './style'

import { Text } from '../ui/text'

export const Info = ({ text }) => {
    return (
        <Back>
        <Conteiner>
            <TitleCont>
                <Text 
                    padding={"0px 10px"}
                    color={"black"} 
                    text={text.title}
                    textAlign={"left"}
                    size={"25px"}
                    mini={"22px"}
                    small={"20px"}
                />
            </TitleCont>
            <Text 
                    width={"100%"}
                    padding={"0px 10px"}
                    text={text.text}
                    textAlign={"left"}
                    size={"16px"}
                    mini={"15px"}
                    small={"14px"}
                />
        </Conteiner>
        </Back>
    )
}