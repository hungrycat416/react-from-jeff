import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';

export default function Topbar() {
  return (
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography>Marsupials</Typography>
        </Toolbar>
      </AppBar>
  );
};
