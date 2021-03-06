import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const  Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
}));

const CustomizedSnackbars = ({ status, message, error = false }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const ok = error? "error" : "success"
  
    useEffect(() => {
        if(status === true) {
            setOpen(true)
        }
    }, [status])
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={ok}>
            { message }
          </Alert>
        </Snackbar>
      </div>
    );
}

export default CustomizedSnackbars