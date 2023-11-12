import moment from 'moment-timezone'
import { routes } from '../../model/routes';
import { airports, Airport } from '../../model/airports';
import { aircrafts } from '../../model/aircrafts';
import { InAirAircraft } from '../../interfaces/aircraft/inAirAircraft';

export const getCurrentSituation = () => {

  const activeRoutes = routes.map(route => {
    const timezoneDeparture = getTimezoneByAirportId(route.airportStart);
    const timezoneArrive = getTimezoneByAirportId(route.airportEnd);
    
    const currentHourAirportDeparture = moment().tz(timezoneDeparture).hour();
    const currentHourAirportArrive = moment().tz(timezoneArrive).hour();

    // let percentage = 0;
    let missedHour = 0;
    let hoursInFlight = 0;

    if (route.nextDay) {
      if (currentHourAirportDeparture > route.timeStart && currentHourAirportArrive < route.timeEnd) {
        
        hoursInFlight = currentHourAirportDeparture - route.timeStart;

        // console.log({ hoursInFlight })
        // console.log("******",percentage, timezoneDeparture, timezoneArrive);
        return {
          id: route.id,
          percentage: getPercentage(hoursInFlight, route.duration),
        };
      }
      if (currentHourAirportArrive < route.timeEnd) {
        missedHour = route.timeEnd - currentHourAirportArrive;
        hoursInFlight = route.duration - missedHour;
        // console.log("---",percentage, timezoneDeparture, timezoneArrive);
        return {
          id: route.id,
          percentage: getPercentage(hoursInFlight, route.duration),
        }
      }
    } else {
      if (currentHourAirportDeparture > route.timeStart && currentHourAirportArrive < route.timeEnd) {
        const hoursInFlight = currentHourAirportDeparture - route.timeStart;

        // console.log("####",percentage, timezoneDeparture, timezoneArrive);
        return {
          id: route.id,
          percentage: getPercentage(hoursInFlight, route.duration),
        };
      }
    }

    return {
      id: route.id,
      percentage: 0,
    };
  }).filter(({ percentage}) => percentage !== 0);

  let aircraftsInAir: InAirAircraft[] = []; // empty array
  if (activeRoutes.length) {
    aircraftsInAir = activeRoutes.map(({ id, percentage }) => {
      return {
        ...getAircraftInAir(id),
        percentage,
      }
    }) || [];
  }
  return {
    aircraftsInAir,
    activeRoutes
  }
};


const getTimezoneByAirportId = (id: number) => {
  const airport: Airport = airports.find(airport => airport.id === id)!;
  return airport.timezoneName;
};

const getPercentage = (hoursInFlight: number, duration: number) => {
  return Math.floor(hoursInFlight / duration * 100);
}

const getAircraftInAir = (idRoute: number) => {
  const aircraft = aircrafts.find(aircraft => {
    return aircraft.routes.find(route => route === idRoute);
  })!;
  return {
    id: aircraft.id,
    type: aircraft.type
  }
}
