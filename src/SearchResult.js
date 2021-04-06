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
    const [titles, setTitles] = useState(['']);
    const [title, setTitle] = useState({"name":null});
    const [desc, setDesc] = useState(['']);
    let { value } = useParams();
    
    useEffect( () => { const query = {
        query: {
          match: {
          "title": <text>"</text> + value + <text>"</text> 
          }   
        }
      };
      axios.get('http://46.101.128.190:9200/testataan/_doc/_search', { // hakee elasticsearchista
        params: {
          source: JSON.stringify(query),
          source_content_type: 'application/json'
        }
      }).then((res) => {
        for (var i = 0; i < res.data.hits.hits.length; i++) {
          titles.push(res.data.hits.hits[i]._source.title  )
          desc.push(res.data.hits.hits[i]._source.language  )
          setTitle({ ...title, ["title"]: res.data.hits.hits[i]._source.title});
          }        
          console.log(titles);
          console.log(titles[1]);
          titles.shift();
      });  }, []);

      if (titles[1] === undefined) {
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
  }    
else  {
    return(
      
<div style={{ display:'flex', justifyContent:'center', flexGrow:1, }}>   
<Card className={classes.ohjelma} style={ {minWidth: 1, minHeight: 1 } }>

<CardContent>
<Fade>
<Typography className={classes.font2}><MovieIcon/>
<p>Ohjelman nimi: {titles} </p></Typography>



<SupervisedUserCircleIcon/>
<p>Näyttelijöiden nimet: Heikki Nurminen, Ulla Taalasmaa</p>

<DateRangeIcon/>
<p>Esittämispäivämäärä: 15.02.2020</p>


<ScheduleIcon/>
<p>Ohjelman kesto: 23.24 minuuttia</p>
</Fade>
</CardContent>
</Card>
</div> 
  
    )
  }
}
export default SearchResult