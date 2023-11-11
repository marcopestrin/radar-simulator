import * as actions from "../actions";
import { getCurrentSituation } from '../controllers/now';

export default function now(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_CURRENT_SITUATION:
			const currentSituation = getCurrentSituation();
			clonedState = {
				...clonedState,
				...currentSituation
			};
		break;

		default:
			break;
	}
	return clonedState;
};
