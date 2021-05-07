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
import WebIcon from '@material-ui/icons/Web';
import thankyoupic from './thankyoupic.jpg';

function FeedbackCard(props) {
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
        img: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
        }
    });
    const classes = useStyles();

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
    };


    return (
        <div style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Card className={classes.ohjelma} style={{ minWidth: 1, minHeight: 1 }}>
                <CardContent>

                    Mitä tykkäsit sivustosta? Voit antaa risuja ja/tai ruusuja lähettämällä sähköpostia kehittäjille
                     <Mailto email="innovatiimi@hotmail.com" subject="Palautelomake" body="Hei InnovaTeam! Pidin... En pitänyt..."> tämän pohjan avulla. </Mailto>
                    <br/>
                    <br/>
                    Kiitos palautteestasi jo etukäteen! Me todella arvostamme sitä!
                </CardContent>
                <img src={thankyoupic} className={classes.img}></img>
            </Card>
        </div>
    );
}
export default FeedbackCard;
