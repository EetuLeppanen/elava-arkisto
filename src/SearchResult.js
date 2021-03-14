import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import axios from 'axios';

//Sivun teema
const useStyles = makeStyles({
    ohjelma: {
    backgroundColor: '#faf5f5', color: 'black',
    font: 'poppins',
    borderRadius: 5,
    border: "10px",
    borderColor: "F000000",
    width: "40%",
   
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
    const [resultCount, setResultCount] = useState('');
 

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
        for (var i = 0; i < res.data.hits.hits.length; i++) { //Käydään palautunut tiedosto läpi ja kerätään siitä otsikot talteen
          titles.push(res.data.hits.hits[i]._source.title  )
          desc.push(res.data.hits.hits[i]._source.language  )
          setTitle({ ...title, ["title"]: res.data.hits.hits[i]._source.title});
          
          }
          setResultCount(res);
          console.log(res);
          console.log(resultCount.data);
          
      });  }, []);

      if (resultCount.data !== null) {
        for (var i = 0; i < titles.length; i++) {
return(
    
<div style={{ display:'flex', justifyContent:'center' }}>    
        <Card className={classes.ohjelma} style={ {minWidth: 1, minHeight: 1 } }>
        <CardContent>
        <Typography className={classes.font2}>{titles[1]}</Typography>
<br></br>

        <Typography className={classes.font}> {desc[1]} </Typography>
        </CardContent>
        </Card>
</div>   
);
}      

} 
else {
    return(
      <div>
      <p>asd</p>
      </div>
  
    )
}
}
export default SearchResult