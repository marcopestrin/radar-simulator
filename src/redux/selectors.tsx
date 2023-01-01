import { Store } from './initialState';
export const selectorAircrafts = (state: Store) => state.aircrafts.list;
export const selectorAirports = (state: Store) => state.airports;
export const selectorRoutes = (state: Store) => state.routes;