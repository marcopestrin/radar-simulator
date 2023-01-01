import { Store } from './interfaces';
export const selectorAircrafts = (state: Store) => state.aircrafts;
export const selectorAirports = (state: Store) => state.airports;
export const selectorRoutes = (state: Store) => state.routes;