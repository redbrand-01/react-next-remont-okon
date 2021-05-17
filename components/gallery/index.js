import React from 'react';

import { useSelector } from 'react-redux'

import { Conteiner } from './style'

import { ImgComponent } from './img'

export const Gallery = ({ tileData, size }) => {

  const width =  useSelector(state => state.app.width)

  let sizeWidth = 1

  if(width > 1240) {
    sizeWidth = 1
  }
  if(width <= 1240 &&  width > 550) {
    sizeWidth = 2
  }
  if(width <= 550) {
    sizeWidth = 3
  }
  
  const len = parseInt(tileData.length / sizeWidth)

  const length =  100 / len + "%"
  const imglen = width / len

  return (
    <Conteiner>
      {
        tileData.map((v, i) => {
          return ( <ImgComponent key={i} v={v} length={length} size={size} imglen={imglen} />
          )
        })
      }

    </Conteiner>
  );
}