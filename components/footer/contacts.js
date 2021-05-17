import React from 'react'
import Link from "next/link"

import { ContactsConteiner, Text } from './style'
import { makeStyles } from '@material-ui/core'

import { useSelector } from 'react-redux'

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import StayPrimaryPortraitIcon from '@material-ui/icons/StayPrimaryPortrait';
import EmailIcon from '@material-ui/icons/Email';

import { config } from '../../setting/info'

const useStyles = makeStyles({
    root: {
        color: '#888888',
        fontSize: '30px',
    }
})

export const Contacts = () => {
    const styles = useStyles()
    const width =  useSelector(state => state.app.width)

    return (
        <>
        <Text size={"20px"} small={"16px"} color={"#ffb300"} indent={"10px"}>{config.textwork}</Text>
        <ContactsConteiner>
            <AccessTimeIcon  className={styles.root}/>
            <Text size={"20px"} small={"16px"} color={"#cccccc"} indent={"10px"}>{config.work}</Text>
        </ContactsConteiner>
        <Text size={"20px"} small={"16px"} color={"#ffb300"} indent={"10px"}>{config.phonetext}</Text>
        <ContactsConteiner>
        {
            width > 780 ?
            <>
                <StayPrimaryPortraitIcon  className={styles.root}/>
                <Text size={"20px"} small={"16px"} color={"#cccccc"} indent={"10px"}>{config.phone}</Text>
            </>
            :
            <>
                <StayPrimaryPortraitIcon  className={styles.root}/>
                <Link href={"tel:" + config.call} >
                    <Text size={"20px"} small={"16px"} color={"#cccccc"} indent={"10px"}>{config.phone}</Text>
                </Link>
            </>
        }
        </ContactsConteiner>
        <Text size={"20px"} small={"16px"} color={"#ffb300"} indent={"10px"}>Email</Text>
        <ContactsConteiner>
            <EmailIcon  className={styles.root}/>
            <Text size={"20px"} small={"16px"} color={"#cccccc"} indent={"10px"}>{config.email}</Text>
        </ContactsConteiner>
        </>
    )
}