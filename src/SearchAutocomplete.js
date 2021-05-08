import React, {useState, Redirect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RadioButtonsGroup from './components/RadioButtonsGroup';
//import ControlledOpenSelect from './components/ControlledOpenSelect';
import SearchIcon from '@material-ui/icons/Search';
import ControlledOpenSelect from './components/ControlledOpenSelect';

function SearchAutocomplete(props) {
  const [title, setTitle] = useState([]);
  const [value, setValue] = useState('');
  const [querydata, setQuerydata] = useState({});


  function typeChange(type) {
    setQuerydata(prevState => ({...prevState, ["TYPE"]: type}))
  }

  function genreChange(genre) {
    setQuerydata(prevState => ({...prevState, ["GENRE"]: genre}))
  }
 
  //Material-UI:n Autocomplete
  
  return (
    <div style={{ justifyContent: 'center', }}>


      <br></br>
      <br></br>
      {/*  <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>  debuggaukseen 
  <div>{`inputValue: '${inputValue}'`}</div> */}
      <RadioButtonsGroup typeChange={typeChange} />
      <ControlledOpenSelect genreChange={genreChange}/>
      <Autocomplete
        value={title}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={value}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
          setQuerydata(prevState => ({...prevState, ["MAINTITLE"]: newInputValue}))


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
            InputProps={{ ...params.InputProps, type: 'search' }} />
        )}
      />
      {/*
      <Button style={{ backgroundColor: "#262a2e", color: "#FFFFFF" }} variant="contained" component={Link}
        to={`/search/${value}`}><SearchIcon />Hae</Button>
      -->*/}

        <Button style={{ backgroundColor: "#262a2e", color: "#FFFFFF" }} variant="contained" component={Link}
        to={{pathname: '/search', querydata: querydata}}><SearchIcon />Hae</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  ); }
export default SearchAutocomplete;