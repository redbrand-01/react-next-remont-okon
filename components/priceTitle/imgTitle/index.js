import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import { Conteiner, ImgConteiner, LeftBackgroung, RightBackgroung, TextCont, TextPosition } from './style'
import { Text } from '../../ui/text'

export const ImgTitle = ({ title }) => {

    const width = useSelector(state => state.app.width)
    return (
    <Conteiner>
        <ImgConteiner>
            <Image
                layout="intrinsic"
                alt="Загрузка"
                width={width}
                height={100}
                objectFit="cover" 
                src={title.img}
                quality={80}
                unoptimized={true}
            />
            <LeftBackgroung />
            <RightBackgroung />
            <TextCont>
                <TextPosition back={"#333"}>
                    <Text padding={"5px"} size={"25px"} mini={"22px"} small={"18px"} padding={"0"} color={"#ffb300"} text={title.title} />
                </TextPosition>
                <TextPosition  back={"#ffb300"} >
                    <Text padding={"5px"} size={"25px"} mini={"22px"} small={"18px"}  padding={"0"} color={"#333"} text={title.sub} />
                </TextPosition>
            </TextCont>
        </ImgConteiner>
     </Conteiner>
    )
}