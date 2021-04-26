import React, {useState, useEffect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
//import RadioButtonsGroup from './components/RadioButtonsGroup';
//import ControlledOpenSelect from './components/ControlledOpenSelect';
import SearchIcon from '@material-ui/icons/Search';
import ReactDOM from 'react-dom';
import ComplexGrid from './ComplexGrid';

function SearchAutocomplete (props) {
    const [title, setTitle] = useState([]);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

    const Mailto = ({ email, subject = '', body = '', children }) => {
      let params = subject || body ? '?' : '';
      if (subject) params += `subject=${encodeURIComponent(subject)}`;
      if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
    
      return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    

//Material-UI:n Autocomplete 
return (
    <div style={{ justifyContent:'center',}}>


  
  

      <br></br>
      <br></br>
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
      options={props.data._source.MAINTITLE}
    renderInput={(params) => (
<TextField
     {...params}
     label="Etsi.."
     margin="normal"
    /* variant="outlined" */
     InputProps={{ ...params.InputProps, type: 'search' }}/>
 )}
/>
<Button  style={{ backgroundColor: "#262a2e", color: "#FFFFFF" }} variant="contained" component={ Link } 
           to= {`/search/${value}`}><SearchIcon/>Hae</Button>    
           <br></br>   
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>




<ComplexGrid></ComplexGrid>

           <Mailto email="joonaksensahkoposti@hotmail.fi" subject="Ohjelmatoive" body="Haluaisin toivoa ojhjaksldf alma lka jsdlka jsdlkasd">
    Pyydä ohjelmaa
  </Mailto> 
            
    </div>      
);}
export default SearchAutocomplete;
