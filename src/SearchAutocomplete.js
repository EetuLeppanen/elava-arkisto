import React, {useState, Redirect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import RadioButtonsGroup from './components/RadioButtonsGroup';
//import ControlledOpenSelect from './components/ControlledOpenSelect';
import SearchIcon from '@material-ui/icons/Search';
import ControlledOpenSelect from './components/ControlledOpenSelect';
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

function SearchAutocomplete(props) {
  const useStyles = makeStyles({
    ohjelma: {
      alignContent: "center",
      color: "black",
      borderColor: "#000000",
      font: "poppins",
      padding: 5,
      margin: 0,
      borderRadius: 9,
      width: "60%",
    },
    
  });
  const classes = useStyles();

  const [title, setTitle] = useState([]);
  const [value, setValue] = useState('');
  const [querydata, setQuerydata] = useState({});
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  function typeChange(type) {
    setQuerydata(prevState => ({...prevState, ["TYPE"]: type}))
  }

  function genreChange(genre) {
    setQuerydata(prevState => ({...prevState, ["GENRE"]: genre}))
  }
 
  //Material-UI:n Autocomplete
  
  return (
    <div className={classes.ohjelma}>


      <br></br>
      <br></br>
      {/*  <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>  debuggaukseen 
  <div>{`inputValue: '${inputValue}'`}</div> */}
 
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
<Grid container spacing={1}>
                <Grid item xs={3}>
                <Collapse in={checked}>
      <RadioButtonsGroup typeChange={typeChange} />
      </Collapse>
      </Grid>
      <Grid item xs={6}>
      <Collapse in ={checked}>
      <ControlledOpenSelect genreChange={genreChange}/>
      </Collapse>
                </Grid>
              </Grid>
              <br/><br/>
        <Button style={{ backgroundColor: "#262a2e", color: "#FFFFFF" }} variant="contained" component={Link}
        to={{pathname: '/search', querydata: querydata}}><SearchIcon />Hae</Button>
<br/><br/>


<FormControlLabel
              control={<Switch checked={checked} onChange={handleChange}  />}
              label="Lisää hakuvaihtoehtoja"
            />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  ); }
export default SearchAutocomplete;