import React from 'react'
import Image from 'next/image'

import { Title } from '../ui/title'
import { Text } from '../ui/text'

import { useSelector } from 'react-redux'

import { 
    Conteiner, 
    ConteinerChooseUs, 
    Us, 
    CountIcon, 
    Icon,
    CountText,
    TitleText,
    TextLine
} from './style'

import { config } from '../../setting/chooseUs'

export const ChooseUs = ({ us }) => {
    const width =  useSelector(state => state.app.width)
    return (
        <Conteiner>
            <Title title={us.title} />
            <Text text={us.sub} />
            <ConteinerChooseUs>
                {
                    config.map((v, i) => {
                        return (
                            <Us key={i}>
                                <CountIcon>
                                    <Icon>
                                        <Image
                                            className="avatar"
                                            layout="intrinsic"
                                            alt="Загрузка"
                                            width={width > 780 ? 45 : 35}
                                            height={width > 780 ? 45 : 35}
                                            src={v.url}
                                            quality={80}
                                            unoptimized={true}
                                        />
                                    </Icon>
                                    <style jsx global>{`
                                        .avatar {
                                            transform: rotate(-45deg);
                                        }
                                    `}</style>
                                </CountIcon>
                                <CountText>
                                    <TitleText>{v.title}<TextLine /></TitleText>
                                    <Text padding={width> 800 ? "0px 10px" : "0px 5px" } size="16px" mini="15px" small="14px" textAlign="left" text={v.text} />
                                </CountText>
                            </Us>
                        )
                    })
                }
            </ConteinerChooseUs>
        </Conteiner>
    )
}