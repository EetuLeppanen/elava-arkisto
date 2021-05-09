import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import BallotIcon from '@material-ui/icons/Ballot';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setGenre(event.target.value);
    props.genreChange(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
console.log(genre);
  
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      </Button>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Genre</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={genre}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Kaikki</em>
          </MenuItem>
          <MenuItem value="draama" >Draama</MenuItem>
          <MenuItem value="opetusohjelma">Opetusohjelma</MenuItem>
          <MenuItem value="viihde">Viihde</MenuItem>
        </Select>
      </FormControl>
      <br></br>
    </div>
    
  );
}