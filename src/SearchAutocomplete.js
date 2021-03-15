import React, {useState, useEffect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
import MultilineTextFields from './MultilineTextFields';

function SearchAutocomplete (props) {
    const [title, setTitle] = useState([]);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

//Material-UI:n Autocomplete 
return (
    <div style={{ justifyContent:'center',}}>
      <MultilineTextFields></MultilineTextFields>    
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
     label="Haku"
     margin="normal"
    /* variant="outlined" */
     InputProps={{ ...params.InputProps, type: 'search' }}/>
 )}
/>
<Button variant="contained" component={ Link } 
           to= {`/search/${value}`}>Hae</Button>        
            
    </div>      
);}
export default SearchAutocomplete;
