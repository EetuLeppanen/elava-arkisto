import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DateRangeIcon from "@material-ui/icons/DateRange";
import RadioIcon from "@material-ui/icons/Radio";
import MovieIcon from "@material-ui/icons/Movie";
import { Reveal, Fade } from "react-awesome-reveal";
import RadioCard from "./RadioCard";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function TvCard(props) {
  const useStyles = makeStyles({
    ohjelma: {
      backgroundColor: "#faf5f5",
      color: "black",
      borderColor: "#000000",
      font: "poppins",
      padding: 5,
      margin: 30,
      borderRadius: 35,
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
            <Typography className={classes.font2}>
              <p>
                {" "}
                <b>{props.data._source.MAINTITLE}</b>{" "}
              </p>
            </Typography>
            
            <p>
              <SupervisedUserCircleIcon />
              Näyttelijät
            </p>
            <p>{props.data._source.ACTORS}</p>
            <br></br>

            <Collapse in={checked}>
              <Fade>
              <p>
                <MovieIcon />
                Genre
              </p>
              <p>{props.data._source.GENRE}</p>
              <br></br>
              </Fade>
            </Collapse>

            <Collapse in={checked}>
            <Fade>
              <p>
                <DateRangeIcon />
                Julkaisuvuosi
              </p>
              <p> {props.data._source.YEAR}</p>
              </Fade>
            </Collapse>

            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange}  />}
              label="Näytä lisää"
            />
          </Fade>
        </CardContent>
      </Card>
    </div>
  );
}
export default TvCard;
