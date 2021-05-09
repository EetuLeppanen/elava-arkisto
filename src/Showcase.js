import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import yle from './yle.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#f2f2f2",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  
  },
  title: {
    color: '#FFFFFF',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));






export default function ComplexGrid(props) {
  const classes = useStyles();
  return (
    

    <div className={classes.root}>
   
      <GridList className={classes.gridList} cols={4}>
        {props.programs.map((ohjelma, index) => {
          return(
          <GridListTile key={yle}>
            <img src={yle} alt="kuva" />

            <GridListTileBar
           
              subtitle = {<a href={"http://localhost:3000/search/" +ohjelma._source.MAINTITLE}>{ohjelma._source.MAINTITLE}</a>}
              
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
              
            />
          </GridListTile>)

        })}
        ))
      </GridList>
      <br></br>
      
      
    </div>
    
    

  );
}