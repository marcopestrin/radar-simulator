export const aircrafts = [
  {
    id: 1,
    routes: [1, 6],
    status: 0,
  },
  {
    id: 2,
    routes: [2],
    status: 0,
  },
  {
    id: 3,
    routes: [3],
    status: 0,
  },
  {
    id: 4,
    routes: [4],
    status: 0,
  },
  {
    id: 5,
    routes: [10,13],
    status: 0,
  },
  {
    id: 6,
    routes: [8,12],
    status: 0,
  },
  {
    id: 7,
    routes: [5,7],
    status: 0,
  },
  {
    id: 8,
    routes: [9,11],
    status: 0,
  },
  {
    id: 9,
    routes: [14],
    status: 0,
  },
];

export interface Aircraft {
  id: number
  routes: Array<number>
  status: number
};