import React, { useEffect, useState } from 'react';
import { GET_AIRCRAFTS } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { selectorAircrafts } from "../../redux/selectors";
import Aircraft from '../aircraft';

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
    <div className="">
      <ul>
        {aircrafts.map(({ id, routes, status }) => {
          return (
            <li key={id}>
              <Aircraft
                id={id}
                routes={routes}
                status={status}
              />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Aircrafts;
