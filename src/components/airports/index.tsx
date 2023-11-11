import React, { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { GET_AIRPORTS } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorAirports } from "../../redux/selectors";
import Airport from '../airport';


function Airports() {

  const dispatch = useDispatch();
  const airports = useSelector(selectorAirports);

  const getAirports = () => {
    dispatch({
      type: GET_AIRPORTS
    });
  };

  useEffect(getAirports, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      }}
    >
      <List>
        {airports.map(({
          timezone,
          id,
          parked,
          hub,
          name,
          position,
          title
        }) => {
          return (
            <React.Fragment key={id}>
              <Airport
                id={id}
                hub={hub}
                name={name}
                parked={parked}
                timezone={timezone}
                title={title}
                position={position}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
}

export default Airports;
