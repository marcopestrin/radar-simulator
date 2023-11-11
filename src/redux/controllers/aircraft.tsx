import { aircrafts, Aircraft } from '../../model/aircrafts';
import { getExplicitRouteById } from './helper';

export const getAircrafts = () => {
	return aircrafts.map((aircraft: Aircraft) => {
		const routesExplicit = aircraft.routes.map(id => getExplicitRouteById(id));
		return {
			...aircraft,
			routesExplicit
		}
	})
};