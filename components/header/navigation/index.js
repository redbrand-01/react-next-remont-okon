import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import LinkActive from '../../../lib/activeLink'

import { navigation } from '../../../setting/navigation'

import { Conteiner, Count, Text, NavbarPhone, NavbarOpen, TextPhone } from './style'

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const Navigation = () => {
  const width =  useSelector(state => state.app.width)

  const [ isOpen , setIsOpen ] = useState(false)

  const icon = isOpen? <CloseIcon /> : <MenuIcon />

  const height = 1080

  const Close = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 1000)
  }

  if(width > height) {
    return (
      <>
        <Conteiner>
          <Count>
            {
              navigation.map((v, i) => {
                return (
                  <LinkActive key={i} href={v.href} activeClassName="active" >
                    <Text  color={"black"} >{v.text}</Text>
                  </LinkActive>
                )
              })
            }
          </Count>
        </Conteiner>
      </>
    )
  }
  if(width <= height) {
    return (
      <>
        <NavbarPhone open={isOpen} onClick={()=>setIsOpen(!isOpen)} >
            <Text  color={"black"} >{icon}{isOpen? "Закрыть" : "меню"}</Text>
        </NavbarPhone>
        <NavbarOpen open={isOpen} img="/header_line.png" >
            {
              navigation.map((v, i) => {
                return (
                  <LinkActive key={i} href={v.href} activeClassName="activephone" >
                    <TextPhone onClick={()=> Close()}  size={"20px"}  color={"white"} >{v.text}</TextPhone>
                  </LinkActive>
                )
              })
            }
        </NavbarOpen>
      </>
    )
  }
}