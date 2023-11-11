import { airports } from '../model/airports';
import { routes } from '../model/routes';

function getCoordsRoutes() {
  return routes.map(({ airportStart, airportEnd }) => {
    const airportStartCoords = airports.find(airport => airport.id === airportStart)!;
    const airportEndCoords = airports.find(airport => airport.id === airportEnd)!;
    const coordinates = [airportStartCoords.position, airportEndCoords.position]
    return {
      coordinates,
      label: `${airportStartCoords.title} - ${airportEndCoords.title}`
    }
  });
};

export default getCoordsRoutes;