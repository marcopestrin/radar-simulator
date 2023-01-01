import { airports, Airport } from '../../model/airports';
import { routes, Route } from '../../model/routes';

export const getAirportById = (id: number) => {
	const airport: Airport | undefined = airports.find((airport: Airport) => airport.id === id);
  return airport;
}

export const getRouteById = (id: number) => {
  const route: Route | undefined = routes.find((route: Route) => route.id === id);
  return route;
};

export const getExplicitRouteById = (id: number) => {
  const route: Route | undefined = getRouteById(id);
  if (route !== undefined) {
    const airportStart: Airport | undefined = getAirportById(route.airportStart)
    const airportEnd: Airport | undefined = getAirportById(route.airportEnd)
    if (airportStart !== undefined && airportEnd !== undefined) {
      return `${airportStart.name} - ${airportEnd.name}`;
    }
  }
  return ``;
};