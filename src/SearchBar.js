import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function SearchBar () {

  
  

  const [searchterm, setSearchterm] = React.useState('');
  

  const editSearchterm = (e) => setSearchterm(e.target.value);

  const query = {
    query: {
      match: {
        "name": "pekka"
      }
    }
  };
  axios.get('http://46.101.128.190:9200/testo/_doc/_search', {
    params: {
      source: JSON.stringify(query),
      source_content_type: 'application/json'
    }
  }).then((res) => {
    console.log(res);
  });


  

  const [data, setData] = useState({"name":null});
  const targetUrl = 'http://46.101.128.190:9200/testataan/_doc/_search?q=name:*'

  useEffect(() => {
    fetch(targetUrl)
    .then(response => response.json())
    .then(data => setData(data._source))
    .catch(error => console.error(error))
}, []);

const dynamicSearch = () => {
 // return {data.name}.filter({data.name} => {data.name}.toLowerCase().includes(searchterm.toLowerCase())).sort()
}

 

  
console.log(JSON.stringify(data))

    
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
           <input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!'/>
           <br></br>
          <h3>Hakuusi sopivat nimet:</h3>
          <div>
          {data}  {dynamicSearch()}
          

          </div>
          
        </div>
        
      );
    }


export default SearchBar;