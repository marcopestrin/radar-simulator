import React, { useEffect, useState } from 'react';
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { selectorAircraftsInAir } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { Aircraft as AircraftInterface } from '../../model/aircrafts';
import { InAirAircraft } from '../../interfaces/aircraft/inAirAircraft';
import usedAicraftMock from '../../defaultValues/aircraft/usedAircraft';

function Aircraft(props: AircraftInterface) {
  const { id, routes, status, type, routesExplicit } = props;
  const [ usedAircraft, setUsedAircraft ] = useState([usedAicraftMock]);

  const aircraftInAir = useSelector(selectorAircraftsInAir);

  useEffect(() => {
    setUsedAircraft(aircraftInAir)
  }, [aircraftInAir]);

  const isInAir = usedAircraft.some((inAir: InAirAircraft) => inAir.id === id) || false;
  const backgroundColor = isInAir ? "#ddd" : "#fff";

  return (
    <Box key={id} >
      <Card variant="outlined">
        <CardActionArea>
          <CardContent
            style={{
              backgroundColor
            }}
            sx={{
              height: '150px',
            }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              >
              <FlightSharpIcon
                color={status === 0 ? 'primary' : 'success'}
                fontSize={'large'}
              />
            </Typography>

            {routesExplicit && routesExplicit.map((route, index) =>
              <Typography color="text.primary" key={`${id}_${index}`}>
                {route} - [TK-{routes[index]}]
              </Typography>
            )}
            <Typography
              key={`${id}`}
              color="text.secondary" 
              variant="h4"
            >{type}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Aircraft;
