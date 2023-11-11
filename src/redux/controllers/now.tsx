import moment from 'moment-timezone'
import { routes, Route } from '../../model/routes';
import { airports, Airport } from '../../model/airports';
import { aircrafts, Aircraft } from '../../model/aircrafts';

export const getCurrentSituation = () => {

  const activeRoutes = getActiveRoutes();
  let aircraftsInAir: { id: number; type: string; }[] = [];
  console.log(activeRoutes);
  if (activeRoutes.length) {
    aircraftsInAir = activeRoutes.map(({ id: idRoute }: Route) => getAircraftInAir(idRoute)) || [];
  }
  return {
    aircraftsInAir,
    activeRoutes
  }
  
}


const getTimezoneByAirportId = (id: number) => {
  const airport: Airport = airports.find(airport => airport.id === id)!;
  return airport.timezoneName;
}

const getActiveRoutes = () => {
  const workingRoutes = routes.filter(route => {

    const timezoneDeparture = getTimezoneByAirportId(route.airportStart);
    const timezoneArrive = getTimezoneByAirportId(route.airportEnd);
    
    const currentHourAirportDeparture = moment().tz(timezoneDeparture).hour();
    const currentHourAirportArrive = moment().tz(timezoneArrive).hour();

    if (route.nextDay) {
      if (currentHourAirportDeparture > route.timeStart && currentHourAirportArrive > route.timeEnd) {
        return true;
      }
    } else {
      if (currentHourAirportDeparture > route.timeStart && currentHourAirportArrive < route.timeEnd) {
        return true;
      }
    }

    return false;
  });
  return workingRoutes;
  
}

const getAircraftInAir = (idRoute: number) => {
  const aircraft = aircrafts.find(aircraft => {
    return aircraft.routes.find(route => route === idRoute);
  })!
  return {
    id: aircraft.id,
    type: aircraft.type
  }
}
