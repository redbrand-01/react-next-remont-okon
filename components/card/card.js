import React, { useState } from 'react'
import Image from 'next/image'

import { CardBox, ImgCount, TextCont } from './style'
import { Text } from '../ui/text'

export const Box = ({ v }) => {
    const [isShown, setIsShown] = useState(false);

    const show = (status) => {
        setIsShown(status)
    }

    return (
        <CardBox>
            <ImgCount
                onMouseEnter={() => show(true)}
                onMouseLeave={() => show(false)}
            >
                <Image
                    layout="intrinsic"
                    unoptimized={true}
                    alt="Загрузка"
                    width={360}
                    height={240}
                    objectFit="cover"
                    src={v.src}
                    quality={80}
                  />
                <TextCont back={ isShown ? "black" : "#ffb300"}>
                <Text size={"24px"}  mini={"22px"} small={"20px"} color={ isShown ? "#ffb300" : "black" } text={v.text} />
                                </TextCont>
            </ImgCount>
                <Text padding="10px" size={"16px"} text={v.label} />
        </CardBox>
    )
}