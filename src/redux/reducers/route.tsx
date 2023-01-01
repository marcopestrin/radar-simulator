import * as actions from "../actions";
import { getRoutes } from '../controllers/route';

export default function route(prevState = {}, action: any){
	let clonedState = JSON.parse(JSON.stringify(prevState));
	const { type, payload } = action;
	switch (type) {
		case actions.GET_ROUTES:
			const routes = getRoutes();
			clonedState = {
				...clonedState,
				...routes
			};
		break;

		default:
			break;
	}
	return clonedState;
};
