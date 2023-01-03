import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { GET_AIRCRAFTS } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorAircrafts } from "../../redux/selectors";
import Aircraft from '../aircraft';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Aircrafts() {

  const dispatch = useDispatch();
  const aircrafts = useSelector(selectorAircrafts);

  const getAircrafts = () => {
    dispatch({
      type: GET_AIRCRAFTS
    });
  }

  useEffect(getAircrafts, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        flexGrow: 1,
        width: '100%',
      }}
    >
      <Grid container spacing={4}>
        {aircrafts.map(({ id, routes, status }) => {
          return (
            <Grid item xs={4} key={id}>
              <Item>
                <Aircraft
                  id={id}
                  routes={routes}
                  status={status}
                />
              </Item>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  );
}

export default Aircrafts;
