import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DateRangeIcon from '@material-ui/icons/DateRange';
import RadioIcon from '@material-ui/icons/Radio';
import MovieIcon from '@material-ui/icons/Movie';
import { Reveal, Fade } from "react-awesome-reveal";
import RadioCard from './RadioCard';
import TvCard from './TvCard';



//Sivun teema
const useStyles = makeStyles({
    ohjelma: {
    backgroundColor: '#faf5f5', color: 'black',
    font: 'poppins',
    borderRadius: 2,
    width: "40%",
    
   
    },
    ohjelma1: {
      backgroundColor: '#faf5f5', color: 'black',
      font: 'poppins',
      borderRadius: 5,
      
      },
//Korttien teema
    font: {
        backgroundColor: '#faf5f5', color: 'black',
        fontSize: 20, 
        font: 'poppins',
        borderRadius: 50,
        },
    font2: {
        backgroundColor: '#faf5f5', color: 'black',
        fontSize: 30, 
        font: 'poppins',
        borderRadius: 50,
         },
})

function SearchResult (props) {
    const classes = useStyles();
    const [programs, setPrograms] = useState([]);
/*     const [titles, setTitles] = useState(['']);
    const [actors, setActors] = useState(['']);
    const [year, setYear] = useState(['']);
    const [title, setTitle] = useState({"name":null});
    const [desc, setDesc] = useState(['']); */
    let { value } = useParams();
    
    useEffect( () => { const query = {
        query: {
          match: {
          "MAINTITLE": <text>"</text> + value + <text>"</text> 
          }   
        }
      };
      axios.get('http://46.101.128.190:9200/testataan/_doc/_search', { // hakee elasticsearchista
        params: {
          source: JSON.stringify(query),
          source_content_type: 'application/json'
        }
      }).then((res) => {
        
        console.log(res.data.hits.hits)
        setPrograms(res.data.hits.hits)
       
        

       /*  for (var i = 0; i < res.data.hits.hits.length; i++) {
          titles.push(res.data.hits.hits[i]._source.MAINTITLE  )
          desc.push(res.data.hits.hits[i]._source.DESC  )
          actors.push(res.data.hits.hits[i]._source.ACTORS  )
          year.push(res.data.hits.hits[i]._source.YEAR  )
          setTitle({ ...title, ["title"]: res.data.hits.hits[i]._source.MAINTITLE});
          }        
          
          console.log(titles[1]);
          titles.shift();
          actors.shift();
          year.shift();
          console.log(actors); */

      
      });  }, []);

      if (programs) {
        return (
          programs.map((program, index) => {
            if (program._source.TYPE === "radio")
            return (
              <RadioCard data = {program}/>
            )
            if (program._source.TYPE === "tv")
            return (
              <TvCard data = {program}/>
            )
          }
        )
        )
      }
/*       if (titles[1] === undefined) {
        return (
         
      titles.map(titles => {
return(
  <div style={{ display:'flex', justifyContent:'center' }}>    
        <Card className={classes.ohjelma1} >
        <CardContent>
        <Typography className={classes.font}>Valitettavasti hakukriteereilläsi ei löytynyt mitään.</Typography>   
        </CardContent>
        </Card>
      </div>   


         )
        }
      )
    )
  }   */  
else  {
    return(
      
<div>ei löydy</div>
  
    )
  }
}
export default SearchResult