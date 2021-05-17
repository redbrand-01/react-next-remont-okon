import React from 'react';
import Carousel from 'nuka-carousel';
import Image from 'next/image'

import { Conteiner, Arrow, CaruselCount, CaruselText, CaruselTextCount } from './style'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({  
    root: {
        color: '#ffffff',
        fontSize: '60px',
    },
    phone: {
      color: '#ffffff',
      fontSize: '30px',
  }
})


export const Carusel = ({ ImgCarusel }) => {
    const width =  useSelector(state => state.app.width)
    const styles = useStyles()

    return (
      <Conteiner>
      <Carousel
        style={{ background: '#fafafa'}}
        disableEdgeSwiping={true}
        autoplay={true}
        scrollMode={"remainder"}
        speed={2000}
        autoplayInterval={6000}
        autoplayReverse={true}
        transitionMode={"scroll"}
        renderCenterLeftControls={({ previousSlide }) => (
            <Arrow onClick={previousSlide}>
                <ChevronLeftIcon  className={width > 1024? styles.root : styles.phone}/>
            </Arrow>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <Arrow onClick={nextSlide}>
                <ChevronRightIcon  className={width > 1024? styles.root : styles.phone}/>
            </Arrow>
          )}
          getControlsContainerStyles={(key) => {
            switch (key) {
               case 'BottomCenter':
                 return {
                   display: 'none',
                 };
               default:
                 return null
             }
         }}
         
      >

          {
            ImgCarusel.map((v, i) => {
              return (
                <CaruselCount key={i}>
                  <Image
                    unoptimized={true}
                    layout="intrinsic"
                    alt="|"
                    width={width}
                    height={ width > 1030? 600 : 300}
                    objectFit="cover" 
                    src={v.img}
                    quality={80}
                  />
                  <CaruselTextCount>
                    <CaruselText size={'35px'} mini={"22px"}  small={"20px"}  width={"80%"} color={"#333333"} back={"#ffb300"}>
                      {v.title}
                    </CaruselText>
                    <CaruselText width={"100%"} size={'35px'} mini={"22px"}  small={"20px"} color={"#cccccc"} back={"rgba(51,51,51,0.95)"}>
                      {v.sub}
                    </CaruselText>
                  </CaruselTextCount>
                </CaruselCount>
              )
            })
          }
        
      </Carousel>
      </Conteiner>
    );
 
}