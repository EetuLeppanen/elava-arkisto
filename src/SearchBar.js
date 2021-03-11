import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


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


 


const dynamicSearch = () => {
 return data.name.filter(namet => namet.toLowerCase().includes(searchterm.toLowerCase())).sort()
}
 
console.log(JSON.stringify(data))

      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
           <input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!'/>
           <br></br>
          <h3>Hakuusi sopivat nimet:</h3>
          <div>
           
      <p>{namet}</p>

          </div>
          
        </div>
        
      );
    }


export default SearchBar;