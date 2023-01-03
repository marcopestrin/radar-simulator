import { Aircraft } from '../model/aircrafts';
import { Airport } from '../model/airports';
import { Route } from '../model/routes';

export interface Store {
  aircrafts: {
    list: Array<Aircraft>
  }
  airports: {
    list: Array<Airport>
  }
  routes: {
    list: Array<Route>
  }
};

export const initialState = {
  aircrafts: {
    list: []
  },
  airports: {
    list: []
  },
  routes: {
    list: []
  },
};