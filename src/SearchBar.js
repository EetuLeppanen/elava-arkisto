import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import SearchResult from './SearchResult'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom';
function SearchBar () {
  const [title, setTitle] = useState(['']);
  const [desc, setDesc] = useState({"name":null});
  const [searchterm, setSearchterm] = useState('');
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

//Tullaan käyttämään myöhemmin, const hakusanalle
const editSearchterm = (e) => setSearchterm(e.target.value);


//Hakee tiedon elasticsearchista
useEffect( () => { const query = {
  query: {
    match_all: {}
     
  }
};
axios.get('http://46.101.128.190:9200/testataan/_doc/_search', { // hakee elasticsearchista
  params: {
    source: JSON.stringify(query),
    source_content_type: 'application/json'
  }
}).then((res) => {
  for (var i = 0; i < res.data.hits.hits.length; i++) { //Käydään palautunut tiedosto läpi ja kerätään siitä otsikot talteen
    title.push(res.data.hits.hits[i]._source.OTSIKKO1  )
    setDesc({ ...desc, ["desc"]: res.data.hits.hits[i]._source});
    }
    console.log(title);
    title.shift();
    console.log(value)
});  }, [])
 

//Material-UI:n Autocomplete 
      return (
           <div >
         { /*   <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
         { /*  <div>{`inputValue: '${inputValue}'`}</div> */}
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
        options={title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Haku"
            margin="normal"
           /* variant="outlined" */
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
  <Button variant="contained" component={ Link } 
                  to= {`/search/${value}`}>Hae</Button>             
           </div>      
      );
    }
export default SearchBar;







{ /*<input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!' onClick = { returnSearch }  />  */ }