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
    backgroundColor: theme.palette.background.paper,
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
      <GridList className={classes.gridList} cols={4.5}>
        {props.ohjelmat.map((ohjelma, index) => {
          return(
          <GridListTile key={yle}>
            <a href={"http://localhost:3000/search/" +ohjelma._source.MAINTITLE}> <img src={yle} alt="yle"/> </a>
            <GridListTileBar
              title={ohjelma._source.MAINTITLE}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${ohjelma._source.MAINTITLE}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>)

        })}
        ))
      </GridList>
    </div>
  );
}