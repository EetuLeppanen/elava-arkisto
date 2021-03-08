import React, {useState, useEffect} from 'react';

import './App.css';


function SearchBar () {

  
  

  const [searchterm, setSearchterm] = React.useState('');
  

  const editSearchterm = (e) => setSearchterm(e.target.value);
  

  

  const [data, setData] = useState({"name":null});
  const targetUrl = 'http://46.101.128.190:9200/testataan/_doc/2'

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
          {data.name}  {dynamicSearch()}
          

          </div>
          
        </div>
        
      );
    }


export default SearchBar;