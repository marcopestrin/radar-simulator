import React from 'react';
import moment from 'moment-timezone'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Airport as AirportInterface } from '../../model/airports';

function Airport(props: AirportInterface) {
  const { hub, name, timezone, title, timezoneName } = props;
  const localHour = moment().tz(timezoneName).format("HH:mm");
  return (
    <ListItem dense={true}>
      <ListItemButton>
        <ListItemIcon>
          { hub ? <StarIcon /> : <></> }
        </ListItemIcon>
        <ListItemText
          primary={`${name} (${title})`}
          secondary={`${localHour} (UTC +${timezone})`}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Airport;
