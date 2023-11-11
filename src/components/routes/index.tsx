import { useEffect } from 'react';
import moment from 'moment';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GET_ROUTES } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorRoutes, selectorActiveRoutes } from "../../redux/selectors";


function formatTime(decimalTime:number) {
  const hours = Math.floor(decimalTime);
  const minutes = Math.round((decimalTime % 1) * 60);
  return moment({ hours, minutes }).format('HH:mm');
}

function Routes() {

  const dispatch = useDispatch();
  const routes = useSelector(selectorRoutes);
  const activeRoutes = useSelector(selectorActiveRoutes);

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
        bgcolor: 'background.paper',
        padding: '0px'
      }}
    >
      <List>
        {routes.map(({ timeStart, timeEnd, airportStart, duration, airportEnd, id, nextDay }) => {
          const isWorking = activeRoutes.some(route => route.id === id);
          const backgroundColor = isWorking ? "#ddd" : "#fff";

          return (
            <ListItem key={id} dense={true}>
              <ListItemButton
                  style={{
                  backgroundColor
                }}
              >
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
