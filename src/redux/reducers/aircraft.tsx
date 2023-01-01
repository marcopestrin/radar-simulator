import * as actions from "../actions";
import { getAircrafts } from '../controllers/aircraft';

export default function aicraft(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_AIRCRAFTS:
			const aircrafts = Object.values(getAircrafts());

			clonedState = {
				...clonedState,
				list: aircrafts
			};
		break;

		default:
			break;
	}
	return clonedState;
};
