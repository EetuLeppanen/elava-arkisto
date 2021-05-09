import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

function RequestPage (){
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
             
    Kaikki ohjelmat eivät välttämättä ole vielä täällä, voit pyytää ohjelmia sähköpostilla  <Mailto email="innovatiimi@hotmail.com" subject="Ohjelmatoive" body="Haluaisin toivoa ohjelmaa X">
    painamalla tästä
  </Mailto>

   
  &nbsp; 
                
    
               
              
            </CardContent>
          </Card>
        </div>
      );
    }
export default RequestPage;