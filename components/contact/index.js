import React, { useState } from 'react'
import axios from 'axios'

import { emailapi } from '../../constant/api'

import { Conteiner, Form, Label } from './style'

import { Text } from '../ui/text'
import { Title } from '../ui/title'
import  Button  from '../ui/button'
import  Alert  from '../ui/alert'

import { Error, Default } from './error'

import TextField from './material'

export const Contact = () => {
    const [ isAlert, setIsAlert ] = useState(false)
    const [ isAlertErr, setIsAlertErr ] = useState(false)
    const [ state, setState ] = useState({
        name: '',
        labelname: '',
        errorname: false,
        email: '',
        labelemail: '',
        erroremail: false,
        text: '',
        labeltext: '',
        errortext: false,
    })

    const onChange = (e) => {
        const copy = {...state}
        copy[e.name] =  e.value
        copy["label" + e.name] =  ""
        copy["error" + e.name] =  false
        setState(copy)
    }

    const onSubmit = () => {
        const { res, err } =  Error(state)
        if(err) {
            setState(res)
        } else {
            axios.post(emailapi, res)
            .then(() => {
                setState(Default)
                setIsAlert(true)
                setTimeout(() => {
                    setIsAlert(false)
                }, [6000])
            })
            .catch(() => {
                setIsAlertErr(true)
                setTimeout(() => {
                    setIsAlertErr(false)
                }, [6000])
            })
        }  
    }

    return (
        <Conteiner>
            <Title title="Оставьте заявку"/>
            <Text padding={"10px"} text="Вызовите нашего замерщика на удобное для Вас время. 
                Он рассчитает точную стоимость ваших работ. 
                Отправьте заявку прямо сейчас!" />
            <Form>
            <TextField
                onChange={e => onChange(e.target)}
                name="name"
                value={state.name}
                error={state.errorname}
                label="Введите имя"
                variant="outlined"
            />
            <Label>
                {state.labelname}
            </Label>
            <TextField
                onChange={e => onChange(e.target)}
                name="email"
                value={state.email}
                error={state.erroremail}
                label="Введите номер телефона"
                variant="outlined"
            />
            <Label>
                {state.labelemail}
            </Label>
            <TextField
                onChange={e => onChange(e.target)}
                name="text"
                value={state.text}
                error={state.errortext}
                label="Оставте сообщенние"
                variant="outlined"
                multiline
                rows={4}
            />
            <Label>
                {state.labeltext}
            </Label>
            <Button icon={"send"} onClick={() => onSubmit()} >
                Оставить сообщение
            </Button>
            </Form>
            <Alert status={isAlert} message="Сообщение отправлено" />
            <Alert status={isAlertErr} message="Произошла ошибка сообщение не отправлено" error/>
        </Conteiner>
    )
}