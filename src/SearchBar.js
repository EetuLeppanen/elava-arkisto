import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import FreeSolo from './FreeSolo';


function SearchBar () {

  const [title, setTitle] = useState({"name":null});
  const [desc, setDesc] = useState({"name":null});
  
  const [searchterm, setSearchterm] = React.useState('');
  
  const editSearchterm = (e) => setSearchterm(e.target.value);



  useEffect( () => { const query = {
    query: {
      match: {
        "_type": "_doc" //axios lähettää get pyynnön elasticsearchiin näillä parametreillä
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
    setTitle({ ...title, ["title"]: res.data.hits.hits[3]._source.OTSIKKO1}); //asetetaan tulos oliolle 'data'
    setDesc({ ...desc, ["desc"]: res.data.hits.hits[3]._source.SISALTOTIETO});
  });  }, [])


 



 
console.log(JSON.stringify(title))

      return ( 
        
      
         //  <input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!'/>
           
          
           <div>
             {title.title}
             <br></br>
             <br></br>
             {desc.desc}
           </div>
        
      );
    }


export default SearchBar;