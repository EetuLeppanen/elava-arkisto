import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MovieIcon from "@material-ui/icons/Movie";
import { Fade } from "react-awesome-reveal";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import WebIcon from "@material-ui/icons/Web";
import TvIcon from "@material-ui/icons/Tv";
import { NoEncryption } from "@material-ui/icons";
import yle from './yle.png';
function TvCard(props) {
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
    root: {
      flexGrow: 1,
      backgroundColor: "#f2f2f2",
      height: 80,
    },
  
  });
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [message, setMessage] = React.useState("Näytä lisää");
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
      <Card className={classes.ohjelma} style={{ minWidth: 1, minHeight: 1 }}>
        <CardContent>
          <Fade>
            <div>
              <Grid container spacing={20}>
                <Grid item xs={6}>
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
            <img src={yle} alt="kuva" width="85%" />
            <Typography className={classes.font2}></Typography>
            <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <p>
                    <b>{props.data._source.GENRE}</b>
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <p>
                    <b> Julkaisuvuosi: {props.data._source.YEAR}</b>
                  </p>
                </Grid>
              </Grid>
            </div>

            <p>{props.data._source.DESC}</p>
            <Collapse in={checked}>
              <Fade>
                <p>Näyttelijät:</p>
                <p> {props.data._source.ACTORS}</p>
              </Fade>
            </Collapse>

            <Collapse in={checked}>
              <Fade>
                <br></br>
              </Fade>
            </Collapse>

            <Collapse in={checked}>
              <Fade></Fade>
            </Collapse>

            <Collapse in={checked}>
              <Fade>
                <a href={"https://areena.yle.fi/" + props.data._source.YLE_ID}>
                  Linkki Yle Areenaan
                </a>
                <br></br>
              </Fade>
            </Collapse>

            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Näytä lisää"
            />
          </Fade>
        </CardContent>
      </Card>
    </div>
  );
}
export default TvCard;
