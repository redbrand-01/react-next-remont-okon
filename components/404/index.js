import React from 'React'
import { Conteiner } from "./style"
import Link from 'next/Link'

import { Text } from '../ui/text'

export const PageError = () => {
    return (
        <Conteiner>
            <Text padding={"0px"} size={"100px"} mini={"80px"} small={"60px"}  text={"ошибка 404"} />
            <Text padding={"0px"} size={"70px"} mini={"50px"} small={"30px"} text={"страница не найдена"} />
            <Link href="/">
                <p style={{ fontSize: 40, cursor: "pointer", color: '#91d5ff'}}>Вернутся на главную</p>
            </Link>       
        </Conteiner>
    ) 
}  