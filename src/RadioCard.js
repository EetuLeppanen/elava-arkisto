import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RadioIcon from "@material-ui/icons/Radio";
import { Fade } from "react-awesome-reveal";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid";

function RadioCard(props) {
  const useStyles = makeStyles({
    ohjelma: {
      backgroundColor: "#faf5f5",
      color: "black",
      borderColor: "#000000",
      font: "poppins",
      padding: 3,
      margin: 16,
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
     root: {
      flexGrow: 1,
      backgroundColor: "#f2f2f2",
      height: 80,
    },
  
  });
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
    <Card className={classes.ohjelma} style={{ minWidth: 1, minHeight: 1 }}>
      <CardContent>
        <Fade>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <p>
                  {" "}
                  <b>
                    <h2>
                      {props.data._source.MAINTITLE.replace(/[0-9,()]/g, "")}
                    </h2>
                  </b>{" "}
                </p>
              </Grid>
            </Grid>
          </div>
          <Typography className={classes.font2}></Typography>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <p>
                  <b>Radio-ohjelma</b>
                </p>
              </Grid>
              <Grid item xs={3}>
               
              </Grid>
            </Grid>
          </div>

          <p>{props.data._source.DESC}</p>
     
        </Fade>
      </CardContent>
    </Card>
  </div>
);
}
export default RadioCard;
