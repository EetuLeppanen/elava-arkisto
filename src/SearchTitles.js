import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchAutocomplete from "./SearchAutocomplete";
import Showcase from './Showcase';

function SearchTitles() {
  const [title, setTitle] = useState([]);
  const [programs, setPrograms] = useState([]);

  //Tullaan käyttämään myöhemmin, const hakusanalle
  // const editSearchterm = (e) => setSearchterm(e.target.value);

  //Hakee kaikki tiedot elasticsearchista
  useEffect(() => {
    const query = {
      query: {
        match_all: {},

      },
      size: 50,
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
        setPrograms(res.data.hits.hits);
        for (var i = 0; i < res.data.hits.hits.length; i++) {
          //Käydään palautunut tiedosto läpi ja kerätään siitä otsikot talteen
          title.push(res.data.hits.hits[i]._source.MAINTITLE.replace(/[0-9,()]/g, ''));
        }

        console.log(title);
      });
  }, []);

  return (<div>
    <SearchAutocomplete title={title} />
    <Showcase programs={programs} />
  </div>
  );
}
export default SearchTitles;


  
