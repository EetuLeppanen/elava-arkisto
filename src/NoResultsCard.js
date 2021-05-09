import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";


function NoResultsCard(props) {
  const useStyles = makeStyles({
    ohjelma: {
      backgroundColor: "#faf5f5",
      color: "black",
      borderColor: "#000000",
      font: "poppins",
      padding: 5,
      margin: 30,
      borderRadius: 9,
      width: "60%",
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
  const classes = useStyles();

  

  return (
    <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Card className={classes.ohjelma} style={{ minWidth: 1, minHeight: 1 }}>
        <CardContent>
         
Hakukriteerejäsi vastaavaa ohjelmaa ei löytynyt. Tarkista hakusanasi tai toivo ohjelmaa <a href="http://localhost:3000/pyyntosivu">täältä!</a>
            
            

           
          
        </CardContent>
      </Card>
    </div>
  );
}
export default NoResultsCard;
