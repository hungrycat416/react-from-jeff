import React from 'react';

import PetsIcon from '@mui/icons-material/Pets';
import {
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

export default function MList(props) {
  const createEntry = (m) => {
    return (
      <ListItemButton onClick={() => props.remove(m.key)}>
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText>{m.text}</ListItemText>
      </ListItemButton>
    );
  };
  const mData = props.m;
  const listM = mData.map(createEntry);
  return <List>{listM}</List>;
}

