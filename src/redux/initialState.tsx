import { Aircraft } from '../model/aircrafts';

export interface Store {
  aircrafts: {
    list: Array<Aircraft>
  }
  airports: object
  routes: object
};

export const initialState = {
  aircrafts: {
    list: []
  },
  airports: {},
  routes: {},
};