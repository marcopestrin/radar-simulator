import { airports } from '../model/airports';
import { routes } from '../model/routes';


// to review!!

const position = {
  lat: 0,
  lng: 0
}

function getCoordsRoutes() {
  return routes.map(({ airportStart, airportEnd }) => {
    const airportStartCoords = airports.find(airport => airport.id === airportStart) ?? { position, title: "city" };
    const airportEndCoords = airports.find(airport => airport.id === airportEnd) ?? { position, title: "city" };
    const coordinates = [airportStartCoords.position, airportEndCoords.position]
    return {
      coordinates,
      label: `${airportStartCoords.title} - ${airportEndCoords.title}`
    }
  });
};

export default getCoordsRoutes;