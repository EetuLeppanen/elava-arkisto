import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchAutocomplete from "./SearchAutocomplete";
import ComplexGrid from "./ComplexGrid";
function SearchTitles() {
  const [title, setTitle] = useState([]);

  //Tullaan käyttämään myöhemmin, const hakusanalle
  // const editSearchterm = (e) => setSearchterm(e.target.value);

  //Hakee kaikki tiedot elasticsearchista
  useEffect(() => {
    const query = {
      query: {
        match_all: {},
      },
    };

    axios
      .get("http://46.101.128.190:9200/testataan/_doc/_search", {
        // get pyyntö elasticsearchiin
        params: {
          source: JSON.stringify(query),
          source_content_type: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.hits.hits);
        setTitle(res.data.hits.hits); //tulos asetetaan muuttujaan
      });
  }, []);

  return (
    <div>
    <SearchAutocomplete title={title} />
    <ComplexGrid title={title} />
    </div>
  );
}
export default SearchTitles;

{
  /*<input type='text' value={searchterm} onChange = {editSearchterm} placeholder = 'Etsi nimeä!' onClick = { returnSearch }  />  */
}
