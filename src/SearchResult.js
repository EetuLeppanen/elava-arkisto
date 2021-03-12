import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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



return(
        <div style={{ display:'flex', justifyContent:'center' }}>
        <Card className={classes.ohjelma} style={ {minWidth: 1, minHeight: 1 } }>
        <CardContent>
        <Typography className={classes.font2}>{props.title.title}</Typography>
<br></br>
<br></br>
<Typography className={classes.font}> {props.desc} </Typography>

</CardContent>
</Card>
</div>
          
);
}

export default SearchResult