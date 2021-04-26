import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";
import axios from "axios";
import RadioCard from "./RadioCard";
import TvCard from "./TvCard";
import NoResultsCard from './NoResultsCard';

//Sivun teema
const useStyles = makeStyles({
  ohjelma: {
    backgroundColor: "#faf5f5",
    color: "black",
    font: "poppins",
    borderRadius: 2,
    width: "40%",
  },
  ohjelma1: {
    backgroundColor: "#faf5f5",
    color: "black",
    font: "poppins",
    borderRadius: 5,
  },
  //Korttien teema
  font: {
    backgroundColor: "#faf5f5",
    color: "black",
    fontSize: 20,
    font: "poppins",
    borderRadius: 50,
  },
  font2: {
    backgroundColor: "#faf5f5",
    color: "black",
    fontSize: 30,
    font: "poppins",
    borderRadius: 50,
  },
});

function SearchResult(props) {
  const classes = useStyles();
  const [programs, setPrograms] = useState([]);

  
    let { value } = useParams(); //komponentti saa parametreinä hakusanan

  useEffect(() => {
    const query = {
      query: {
        match: {
          MAINTITLE: <text>"</text> + value + <text>"</text>, 
          //ohjelma tekee get pyynnön elasticsearchiin parametrinä saadulla hakusanalla
        },
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
        setPrograms(res.data.hits.hits); //tulos asetetaan muuttujaan
      });
  }, []);

  if (programs.length > 0) {
    return programs.map((program, index) => {
      if (program._source.TYPE === "radio") return <RadioCard data={program} />; //jos tulos on radioohjelma
      if (program._source.TYPE === "tv") return <TvCard data={program} />;       //jos tulos on tv-ohjelma
    });
  } else {
    return <NoResultsCard/>
  }
}
export default SearchResult;
