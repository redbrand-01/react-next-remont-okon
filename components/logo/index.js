import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { LogoConteiner, Text, TextConteiner } from './style'

import Link from 'next/link'

import { config } from '../../setting/logo'

export const Logo = () => {
    const width = useSelector(state=> state.app.width)

    const size = width > 650 ? 90 : 55
    return (
        <Link href="/">
    
            <LogoConteiner>
                <Image
                    layout="intrinsic"
                    alt="Загрузка"
                    width={size}
                    height={size}
                    objectFit="cover" 
                    src={config.logo}
                    quality={80}
                  />
                <TextConteiner>
                    <Text size={"50px"} color={"#ffb300"} small={"30px"}>
                        {config.logoname}
                    </Text>
                    <Text size={"50px"} color={"white"} small={"30px"}>
                        {config.logosurname}
                    </Text>
                </TextConteiner>
        
            </LogoConteiner>
        </Link>
    )
}