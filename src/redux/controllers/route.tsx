import { routes, Route } from '../../model/routes';
import { getAirportById } from '../controllers/helper';

export const getRoutes = () => {
	return routes.map((route: Route )=> {
		let airportStart: any = getAirportById(route.airportStart);
		let airportEnd: any = getAirportById(route.airportEnd);
		if (airportStart !== undefined) {
			airportStart = airportStart.name;
		}
		if (airportEnd !== undefined) {
			airportEnd = airportEnd.name;
		}
		return {
			airportStart,
			airportEnd,
			id: route.id
		}
	})
};