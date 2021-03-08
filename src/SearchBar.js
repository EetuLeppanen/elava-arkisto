import React, {useState, useEffect} from 'react';

import './App.css';


function SearchBar () {

  
  

  const [searchterm, setSearchterm] = React.useState('');
  const [names, setNames] = React.useState([]);
  

  const editSearchterm = (e) => setSearchterm(e.target.value);
  

  const dynamicSearch = () => {


   
    return names.filter(name => name.toLowerCase().includes(searchterm.toLowerCase())).sort()
  }

  const [data, setData] = useState({"name":null});
  const targetUrl = 'http://46.101.128.190:9200/testataan/_doc/1'

  useEffect(() => {
    fetch(targetUrl)
    .then(response => response.json())
    .then(data => setData(data._source))
    .catch(error => console.error(error))
}, []);



 

  
console.log(JSON.stringify(data))

    
      return (
        <div>NIMET:
          {data.name}
        </div>
        
      );
    }


export default SearchBar;