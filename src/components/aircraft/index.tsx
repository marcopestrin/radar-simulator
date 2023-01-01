import React, { useEffect, useState } from 'react';

import { Aircraft as AircraftInterface } from '../../model/aircrafts';
function Aircraft(props: AircraftInterface) {

  const { id, routes, status } = props;
  return (
    <div className="">
      <ul>
        { routes.map(route => {
          return <li>{route}</li>
        })}
      </ul>
      <br />
    </div>
  );
}

export default Aircraft;
