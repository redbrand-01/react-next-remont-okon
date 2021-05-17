import React from 'react'
import { TitleConteiner, LineLeft, LineRight, CountIcon } from './style'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        color: "#ffb300",
        fontSize: 30,
    }
})

export const Title = ({ title }) => {
    const styles = useStyles()

    return (
        <TitleConteiner>
        {title}
            <LineLeft/>
            <LineRight />
            <CountIcon>
                <ExpandMoreIcon className={styles.root} />
            </CountIcon>
        </TitleConteiner>
    )
}