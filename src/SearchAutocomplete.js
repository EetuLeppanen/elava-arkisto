import React, {useState, useEffect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import ControlledOpenSelect from './components/ControlledOpenSelect';
import SearchIcon from '@material-ui/icons/Search';

function SearchAutocomplete (props) {
    const [title, setTitle] = useState([]);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

//Material-UI:n Autocomplete 
return (
    <div style={{ justifyContent:'center',}}>
      

 {/*  <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>  debuggaukseen 
  <div>{`inputValue: '${inputValue}'`}</div> */}
<Autocomplete
   value={title}
   onChange={(event, newValue) => {
     setValue(newValue);
}}     
   inputValue={inputValue}
   onInputChange={(event, newInputValue) => {
     setInputValue(newInputValue);
}}
   freeSolo
    id=""
     disableClearable
    options={props.title}
    renderInput={(params) => (
<TextField
     {...params}
     label="Etsi.."
     margin="normal"
    /* variant="outlined" */
     InputProps={{ ...params.InputProps, type: 'search' }}/>
 )}
/>
<Button style={{ backgroundColor: "#50A1A1" }} variant="contained" component={ Link } 
           to= {`/search/${value}`}><SearchIcon/>Hae</Button>        
            
    </div>      
);}
export default SearchAutocomplete;
