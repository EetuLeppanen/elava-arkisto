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
  const [maintitle, setMaintitle] = useState('');
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');

  let query = {
    "query": {
      "bool": {
      "must": [ ],
      "must_not": [ ],
      "should": [ ]
    }},
    "from": 0,
    "size": 50,
    "sort": [ ],
    "aggs": { }
    }

  /*
  let query = {
    "query": {
      "bool": {
      "must": [ ],
      "must_not": [ ],
      "should": [
        {"match_all": {}}
        ]}},
    "from": 0,
    "size": 50,
    "sort": [ ],
    "aggs": { }
    }
  */
 

  
    let { value } = useParams(); //komponentti saa parametreinä hakusanan

  useEffect(() => {
    if(props.location.querydata) {
      for (const [key, value] of Object.entries(props.location.querydata)) {
        console.log(`${key}: ${value}`);
        console.log("avain: " + key);
        if(key == "MAINTITLE") {
          var object1 = {match: { [key] : ".*" + value + ".*" }}
          var object2 = {prefix: { [key] : value }}
          query.query.bool.should.push(object1);
          query.query.bool.should.push(object2);
        } else if (key == "TYPE") {
          var object = {match: { [key] : value}}
          query.query.bool.must.push(object);
        } else if (key == "GENRE") {
          var object = {match: { [key] : value}}
          query.query.bool.should.push(object);
        }
      } 

      /*/
      var paramlist = Object.keys(props.location.querydata)
      console.log(paramlist)
      for (var i in paramlist) {
        var param = paramlist[i]
        console.log(param)
        console.log('param: ' + props.location.querydata.param)
        query.query.bool.should.push({
            "prefix": props.location.querydata.param
        })
      }
      */
    } else if (props.location.pathname.substring(8)) {
      var object = {match: { MAINTITLE : props.location.pathname.substring(8) }}
      query.query.bool.should.push(object);
    }
    
    console.log(query);
    /*
    const query = {
      query: {
        match: {
          MAINTITLE: <text>"</text> + value + <text>"</text>,
          //ohjelma tekee get pyynnön elasticsearchiin parametrinä saadulla hakusanalla
        },
        
      },
    };
    */
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
        // console.log(type);
        var list = [];
        res.data.hits.hits.map((program, index) => {
          if (program._score > 1) {
            list.push(program)
          }
        })
        setPrograms(list); //tulos asetetaan muuttujaan
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
