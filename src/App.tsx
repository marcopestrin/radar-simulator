import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { GET_ROUTES, INIT } from './redux/actions';
import { useDispatch } from "react-redux";
import Aircrafts from './components/aircrafts';
import Airports from './components/airports';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: INIT
    })
  });

  const getRoutes = () => {
    dispatch({
      type: GET_ROUTES
    });
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h3" component="h3">Airports</Typography>
          <Airports />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="h3">Aircrafts</Typography>
          <Aircrafts />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
