import React, { useState } from 'react';
import Image from 'next/image'

import { ImgConteiner, ImgBar } from './style'

import { Text } from '../ui/text'

export const ImgComponent = ({ v, length, size, imglen }) => {
  const [ state, setState ] = useState(false)
  const height = imglen - imglen / 3

  const show = (status) => {
    setState(status)
  }

  return (

    <ImgConteiner 
        width={length}
        onMouseEnter={() => show(true)}
        onMouseLeave={() => show(false)}
    >
        <Image
            alt="Загрузка"
            width={imglen}
            height={ height }
            src={v.img}
            priority={true}
            quality={80}
            unoptimized={true}
        />
        <ImgBar back={state? "#ffb300": "#222222"} >
        <Text
            padding={"10px"}
            size={size + "px"} 
            mini={size - 2 + "px"} 
            small={size - 4 + "px"} 
            text={v.title}
            color={state? "#222222": "#ffb300"} 
            textAlign={"left"}/>
        </ImgBar>
    </ImgConteiner>
  );
}