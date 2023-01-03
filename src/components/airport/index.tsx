import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';


function Airport(props: any) {
  const { id, timezone, hub, parked, name} = props.payload
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          { hub ? <StarIcon /> : <></> }
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>

    </ListItem>
  );
}

export default Airport;
