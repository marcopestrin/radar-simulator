import { useEffect } from 'react';
import moment from 'moment';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GET_ROUTES } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorRoutes } from "../../redux/selectors";

function formatTime(decimalTime:number) {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime % 1) * 60);
  return moment({ hours, minutes }).format('HH:mm');
}

function Routes() {

  const dispatch = useDispatch();
  const routes = useSelector(selectorRoutes);

  const getRoutes = () => {
    dispatch({
      type: GET_ROUTES
    });
  };


  useEffect(getRoutes, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }}
    >
      <List>
        {routes.map(({ timeStart, timeEnd, airportStart, duration, airportEnd, id, nextDay }) => {
          return (
            <ListItem key={id}>
              <ListItemButton>
                <ListItemText
                  primary={`[TK-${id}] ${airportStart} - ${airportEnd}`}
                  secondary={`${formatTime(timeStart)} - ${formatTime(timeEnd)} ${nextDay ? '(+1)' : ''} (Duration: ${duration}h)`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default Routes;
