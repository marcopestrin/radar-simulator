import * as actions from "../actions";
import { airports, Airport } from '../../model/airports';

const getAirports = () => {
	return airports;
};
export default function airport(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_AIRPORTS:
			const _airports = getAirports();
			clonedState = {
				...clonedState,
				..._airports
			};
		break;

		default:
			break;
	}
	return clonedState;
};