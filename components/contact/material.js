import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      width: '95%',
      '& label.Mui-focused': {
        color: '#ffb74d',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ffb74d',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.25)',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(0, 0, 0, 0.26)',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffb74d',
          boxShadow: '0 0 5px rgba(0,0,0,0.2)',
        },
      },
    },
})(TextField);

export default CssTextField