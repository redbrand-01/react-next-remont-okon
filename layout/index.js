import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_WIDTH } from '../constant/store'
import ReactGA from 'react-ga';
import { Header } from './head/global'

import { HeaderComponent } from '../components/header'
import { FooterComponent } from '../components/footer'

import { Contact } from '../components/contact'

import { HeaderConteiner, MainConteiner, FooterConteiner } from './style'

ReactGA.initialize("UA-192502057-1")

export const Layout = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
      return() => ReactGA.pageview(window.location.pathname + window.location.search);
    })      

    useEffect(() => {
        dispatch({ // ширина екрана при запуске
          type: ADD_WIDTH,
          width: window.innerWidth
        })
      }, [true])
    
      useEffect(() => {
        window.addEventListener('resize', ()=>{
          dispatch({ // ширина екрана 
            type: ADD_WIDTH,
            width: window.innerWidth
          })
        })
      }, [true])

    return (
    <>
       <Header/>
       <HeaderConteiner>
          <HeaderComponent />
       </HeaderConteiner>
       <MainConteiner>
        { children }
        <Contact />
       </MainConteiner>
       <FooterConteiner>
          <FooterComponent />
       </FooterConteiner>
    </>
    )
}