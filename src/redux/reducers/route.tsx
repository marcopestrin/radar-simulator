import * as actions from "../actions";
import { routes, Route } from '../../model/routes';
import { getAirportById } from './helper';

const getRoutes = () => {
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

export default function route(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_ROUTES:
			const _routes = getRoutes();
			clonedState = {
				...clonedState,
				..._routes
			};
		break;

		default:
			break;
	}
	return clonedState;
};