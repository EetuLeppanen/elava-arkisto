import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



function FreeSolo(props) {

const title = props.title;
console.log(title);
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id=""
        disableClearable
        options={title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Haku"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </div>
  );
}

export default FreeSolo;