import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SearchAutocomplete from './SearchAutocomplete';

function SearchTitles () {
  const [title, setTitle] = useState(['']);

//Tullaan käyttämään myöhemmin, const hakusanalle
// const editSearchterm = (e) => setSearchterm(e.target.value);

//Hakee kaikki tiedot elasticsearchista
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
    title.push(res.data.hits.hits[i]._source.title  )}
    title.shift();
    console.log(title);
});  }, [])
 
      return (
      
         <SearchAutocomplete title = {title}/>)

};
export default SearchTitles;







{ /*<input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!' onClick = { returnSearch }  />  */ }