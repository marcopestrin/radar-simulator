export const airports = [
  {
    id: 1,
    timezone: 1,
    parked: [],
    hub: false,
    name: "Madrid"
  },
  {
    id: 2,
    timezone: 2,
    parked: [],
    hub: false,
    name: "Cape Town"
  },
  {
    id: 3,
    timezone: 4,
    parked: [],
    hub: true,
    name: "Dubai"
  },
  {
    id: 4,
    timezone: 8,
    parked: [],
    hub: false,
    name: "Singapore"
  },
  {
    id: 5,
    timezone: 9,
    parked: [],
    hub: true,
    name: "Tokyo"
  },
];

export interface Airport {
  id: number
  timezone: number
  parked: Array<number>
  hub: boolean
  name: string
};