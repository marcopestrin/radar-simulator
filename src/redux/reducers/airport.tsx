import * as actions from "../actions";
import { getAirports } from '../controllers/airport';

export default function airport(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_AIRPORTS:
			const airports = getAirports();
			clonedState = {
				...clonedState,
				...airports
			};
		break;

		default:
			break;
	}
	return clonedState;
};
