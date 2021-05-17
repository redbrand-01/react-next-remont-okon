import React from 'react'
import Image from 'next/image'

import { makeStyles } from '@material-ui/core'

import { SocialConteiner, SocialIcon, Ahref } from './style'

const useStyles = makeStyles({
    root: {
        color: '#888888',
        "&:hover" : {
            color: '#ffb300',
        }
    }
})


export const Social = () => {

    const styles = useStyles()
    return (
        <SocialConteiner>
            <SocialIcon>
                <Ahref href="https://vk.com/teplyidom.perm" >
                <Image
                    layout="intrinsic"
                    alt=""
                    width={40}
                    height={40}
                    objectFit="cover" 
                    src={"/vk.png"}
                    quality={80}
                  />
                </Ahref>
            </SocialIcon>
           
        </SocialConteiner>
    )
}