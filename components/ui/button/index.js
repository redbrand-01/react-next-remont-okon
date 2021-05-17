import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonComp from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: "#ffb300",
      '&:hover': {
        backgroundColor: "#ffc200",
      },
    },
  },
}));

const Buttons = ({ children, icon, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonComp onClick={() => onClick()} startIcon={<Icon>{icon}</Icon>} variant="contained" color="primary">
        { children }
      </ButtonComp>
    </div>
  );  
}

export default Buttons