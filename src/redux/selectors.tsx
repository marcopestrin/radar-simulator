import { Store } from './initialState';
export const selectorAircrafts = (state: Store) => state.aircrafts.list;
export const selectorAirports = (state: Store) => state.airports.list;
export const selectorRoutes = (state: Store) => state.routes.list;
export const selectorActiveRoutes = (state: Store) => state.currentSituation.activeRoutes;
export const selectorAircraftsInAir = (state: Store) => state.currentSituation.aircraftsInAir;