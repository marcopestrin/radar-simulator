import * as actions from "../actions";
import { aircrafts, Aircraft } from '../../model/aircrafts';
import { getExplicitRouteById } from './helper';

const getAircraft = () => {
	return aircrafts.map((aircraft: Aircraft) => {
		const routes = aircraft.routes.map(id => getExplicitRouteById(id));
		return {
			...aircraft,
			routes
		}
	})
};

export default function aicraft(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_AIRCRAFTS:
			const _aircraft = getAircraft();
			clonedState = {
				...clonedState,
				..._aircraft
			};
		break;

		default:
			break;
	}
	return clonedState;
};