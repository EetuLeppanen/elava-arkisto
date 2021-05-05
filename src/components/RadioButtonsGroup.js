import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [type, setType] = React.useState('female');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Kumpi?</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleChange}>
        <FormControlLabel value="radio" control={<Radio />} label="Radio" />
        <FormControlLabel value="tv" control={<Radio />} label="Televisio" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(VIRTUAL REALITY)" />
      </RadioGroup>
    </FormControl>
  );
}