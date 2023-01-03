import React, { useEffect } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { GET_ROUTES } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorRoutes } from "../../redux/selectors";



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
        {routes.map(({ airportStart, airportEnd, id }) => {
          return (
            <ListItem key={id}>
              <ListItemButton>
                <ListItemText primary={`${airportStart} - ${airportEnd}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default Routes;
