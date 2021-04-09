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
import InfoIcon from '@material-ui/icons/Info';



function RadioCard (props){
    const useStyles = makeStyles({
        ohjelma: {
        backgroundColor: '#faf5f5', color: 'black',
        borderColor: '#000000',
        font: 'poppins',
        padding: 5,
        margin: 30,
        borderRadius: 35,
        width: "60%",
        
       
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
    const classes = useStyles();
   
    return(
        
<div style={{ display:'flex', justifyContent:'center', flexGrow:0.5,}}>   
<Card className={classes.ohjelma} style={ {minWidth: 1, minHeight: 1 } }>

<CardContent>
<Fade>
<Typography className={classes.font2}>
<p> {props.data._source.MAINTITLE} </p></Typography>


<div style = {{ marginBottom: 5, marginTop: 1}}>
<InfoIcon/>
    

<p>{props.data._source.DESC}</p>
</div>

<p></p>


</Fade>
</CardContent>
</Card>
</div> 
    )
}
export default RadioCard;
