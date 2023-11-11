import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { INIT } from './redux/actions';
import { useDispatch } from "react-redux";
import Aircrafts from './components/aircrafts';
import Airports from './components/airports';
import Routes from './components/routes';
import Map from './components/map';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: INIT
    })
  });

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3">Airports</Typography>
              <Airports />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3">Routes</Typography>
              <Routes/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="h3">Map</Typography>
          <Map />
          <Typography variant="h3" component="h3">Aircrafts</Typography>
          <Aircrafts />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
