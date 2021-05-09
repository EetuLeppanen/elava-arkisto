import React, {useState, Redirect, useEffect} from 'react';
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
import yle from './yle.png';
function SearchAutocomplete(props) {
  const useStyles = makeStyles({
    ohjelma: {
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      color: "black",
      borderColor: "#000000",
      font: "poppins",
      padding: 0,
   
      borderRadius: 9,
      width:"50%",
      backgroundColor:"#f2f2f2"
    },
    
  });
  const classes = useStyles();

  const [title, setTitle] = useState([]);
  const [value, setValue] = useState('');
  const [querydata, setQuerydata] = useState({});
  const [checked, setChecked] = React.useState(false);
  const [options, setOptions] = useState([]);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(()=>{
    setOptions(props.title);
  }, [])

  function typeChange(type) {
    setQuerydata(prevState => ({...prevState, ["TYPE"]: type}))
    if (type == 'tv') {
      setOptions(props.tvlist);
    } else if (type == 'radio') {
      setOptions(props.radiolist);
    }
  }

  function genreChange(genre) {
    setQuerydata(prevState => ({...prevState, ["GENRE"]: genre}))
  }
 
  //Material-UI:n Autocomplete
  console.log(props.programsInfo)
  return (
    <div
      style={{
        justifyContent: "center",
        flexGrow: 1,
        backgroundColor: "#f2f2f2",
      }}
    >
      <br></br>

      <br></br>
      <br></br>
      {/*  <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>  debuggaukseen 
  <div>{`inputValue: '${inputValue}'`}</div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Autocomplete
          style={{ width: "50%" }}
          value={title}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={value}
          onInputChange={(event, newInputValue) => {
            setValue(newInputValue);
            setQuerydata((prevState) => ({
              ...prevState,
              ["MAINTITLE"]: newInputValue,
            }));
          }}
          freeSolo
          id=""
          disableClearable
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Hae elävästä arkistosta..."
              margin="normal"
              /* variant="outlined" */
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />

        <Button
          variant="contained"
          size="small"
          component={Link}
          to={{ pathname: "/search", querydata: querydata }}
        >
          <SearchIcon />
          Hae
        </Button>
      </div>

      <Grid container justify="center" spacing={1}>
        <Grid item xs={4}>
          <Collapse in={checked}>
            <RadioButtonsGroup typeChange={typeChange} />
          </Collapse>
        </Grid>
        <Grid item xs={2}>
          <Collapse in={checked}>
            <ControlledOpenSelect genreChange={genreChange} />
          </Collapse>
        </Grid>
      </Grid>
      <br></br>
      <div style={{ display: "flex", paddingLeft: "62%", flexGrow: 1 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Tarkenna hakua"
        />
      </div>

      <br></br>

      <p>
        <b> Viimeksi lisätyt</b>
      </p>
      <br></br>
    </div>
  ); }
export default SearchAutocomplete;