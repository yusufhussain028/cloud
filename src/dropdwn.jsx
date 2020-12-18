import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function Dropdwn() {

  const dispatch= useDispatch();
  const classes = useStyles();
  const [state, setState] = React.useState({ });

  const handleChange = (event) => {
  console.log('event'+ event.currentTarget.value);
  if (event.currentTarget.value ==20)
  {
  dispatch({type:'SORTBYFIST',state:null});
  };
   if (event.currentTarget.value ==30)
  {
  dispatch({type:'SORTBYLAST',state:null});
  };
      
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Sort By</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={10}>None</option>
          <option value={20}>First Name</option>
          <option value={30}>Last Name</option>
        </Select>
      </FormControl>
     
      
    </div>
  );
}