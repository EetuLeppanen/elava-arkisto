import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import FreeSolo from './FreeSolo';
import SearchResult from './SearchResult'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'
function SearchBar () {

  const [title, setTitle] = useState(['']);
  const [desc, setDesc] = useState({"name":null});
  const [searchterm, setSearchterm] = React.useState('');
  const [options, setOptions] = useState([]);

  const editSearchterm = (e) => setSearchterm(e.target.value);

  useEffect( () => { const query = {
    query: {
      match: {
        "_type": "_doc" //axios lähettää get pyynnön elasticsearchiin näillä parametreillä
      }
    }
  };
  axios.get('http://46.101.128.190:9200/testataan/_doc/_search', { // hakee elasticsearchista
    params: {
      source: JSON.stringify(query),
      source_content_type: 'application/json'
    }
  }).then((res) => {
    
    for (var i = 0; i < 4; i++) { 
      title.push(res.data.hits.hits[i]._source.OTSIKKO1)
      }
      console.log(i);
      title.shift();
      title.splice(1,1)
    setDesc({ ...desc, ["desc"]: res.data.hits.hits[3]._source.SISALTOTIETO});
   
  });  }, [])


console.log(JSON.stringify(title))

      return (
           <div style={{ display:'flex', justifyContent:'center' }}>
               <FreeSolo title = {title} desc = {desc.desc}/>

           </div>      
      );
    }
export default SearchBar;







{ /*<input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!' onClick = { returnSearch }  />  */ }