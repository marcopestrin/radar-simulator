import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';

import { Airport as AirportInterface } from '../../model/airports';

function Airport(props: AirportInterface) {
  const { hub, name, timezone, title } = props;
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          { hub ? <StarIcon /> : <></> }
        </ListItemIcon>
        <ListItemText
          primary={`${name} (${title})`}
          secondary={`UTC +${timezone}`}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Airport;
