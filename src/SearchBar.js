import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import FreeSolo from './FreeSolo';


function SearchBar () {

  const [data, setData] = useState({"name":null});
  const [searchterm, setSearchterm] = React.useState('');
  
  const editSearchterm = (e) => setSearchterm(e.target.value);



  useEffect( () => { const query = {
    query: {
      match: {
        "_id": "2AUYF3gBJ_xsVv3hqV1M" //axios lähettää get pyynnön elasticsearchiin näillä parametreillä
      }
    }
  };
  axios.get('http://46.101.128.190:9200/_search', { // hakee elasticsearchista
    params: {
      source: JSON.stringify(query),
      source_content_type: 'application/json'
    }
  }).then((res) => {
    console.log(res);
    setData({ ...data, ["name"]: res.data.hits.hits[0]._source.tyonkuva}); //asetetaan tulos oliolle 'data'
    
  });  }, [])


 



 
console.log(JSON.stringify(data))

      return ( 
        
      
           //<input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!'/>
           
          
           <div><FreeSolo/></div>
        
      );
    }


export default SearchBar;