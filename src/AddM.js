import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { FormControl, TextField, Button } from '@mui/material';

const AddM = (props) => {
  return (
    <FormControl style={{ marginTop: '1rem' }}>
      <form onSubmit={props.addM}>
        <TextField
          variant="standard"
          style={{ margin: '1rem' }}
          onChange={props.handleInput}
        />
        <Button variant="contained" type="submit">
          Add Marsupial
        </Button>
      </form>
    </FormControl>
  );
};

export default AddM;
