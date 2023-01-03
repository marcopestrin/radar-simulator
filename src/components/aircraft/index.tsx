import React, { useEffect, useState } from 'react';
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { Aircraft as AircraftInterface } from '../../model/aircrafts';
function Aircraft(props: AircraftInterface) {

  const { id, routes, status } = props;
  return (
    <Box key={id} >
      <Card variant="outlined">
        <CardActionArea>

          <CardContent
            sx={{
              height: '150px',
            }}
          >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <FlightSharpIcon
                color={status === 0 ? 'primary' : 'success'}
                fontSize={'large'}
              />
            </Typography>
            { routes.map((route, index) => {
              return <Typography key={`${id}_${index}`}>{route}</Typography>
            })}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Aircraft;
