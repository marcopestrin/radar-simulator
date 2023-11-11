export const aircrafts = [
  {
    id: 1,
    routes: [1, 6],
    status: 0,
    type: 'Airbus A380'
  },
  {
    id: 2,
    routes: [2],
    status: 0,
    type: 'Airbus A350'
  },
  {
    id: 3,
    routes: [3],
    status: 0,
    type: 'Boeing 777'
  },
  {
    id: 4,
    routes: [4],
    status: 0,
    type: 'Boeing 777'
  },
  {
    id: 5,
    routes: [10,13],
    status: 0,
    type: 'Airbus A350'
  },
  {
    id: 6,
    routes: [8,12],
    status: 0,
    type: 'Airbus A380'
  },
  {
    id: 7,
    routes: [5,7],
    status: 0,
    type: 'Airbus A380'
  },
  {
    id: 8,
    routes: [9,11],
    status: 0,
    type: 'Airbus A380'
  },
  {
    id: 9,
    routes: [14],
    status: 0,
    type: 'Airbus A350'
  },
];

export interface Aircraft {
  id: number
  routes: Array<number>
  status: number
  type: string
  routesExplicit?: Array<string>
};