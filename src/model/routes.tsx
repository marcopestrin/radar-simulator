// hours and minutes are locals
export const routes = [
  // madrid
  {
    id: 1,
    airportStart: 1,
    airportEnd: 3,
    timeStart: 21,
    timeEnd: 8,
    duration: 7,
    nextDay: true
  },
  {
    id: 2,
    airportStart: 1,
    airportEnd: 5,
    timeStart: 14,
    timeEnd: 14,
    duration: 16,
    nextDay: true
  },
  {
    id: 3,
    airportStart: 1,
    airportEnd: 2,
    timeStart: 9,
    timeEnd: 21,
    duration: 11,
    nextDay: false
  },

  // cape town
  {
    id: 4,
    airportStart: 2,
    airportEnd: 1,
    timeStart: 10,
    timeEnd: 20,
    duration: 11,
    nextDay: false
  },
  {
    id: 5,
    airportStart: 2,
    airportEnd: 3,
    timeStart: 20,
    timeEnd: 9,
    duration: 11,
    nextDay: true
  },

  // dubai
  {
    id: 6,
    airportStart: 3,
    airportEnd: 1,
    timeStart: 13,
    timeEnd: 18,
    duration: 8,
    nextDay: false
  },
  {
    id: 7,
    airportStart: 3,
    airportEnd: 2,
    timeStart: 11,
    timeEnd: 18,
    duration: 9,
    nextDay: false
  },
  {
    id: 8,
    airportStart: 3,
    airportEnd: 5,
    timeStart: 19,
    timeEnd: 9,
    duration: 9,
    nextDay: true
  },
  {
    id: 9,
    airportStart: 3,
    airportEnd: 4,
    timeStart: 21,
    timeEnd: 8,
    duration: 7,
    nextDay: true
  },

  // singapore
  {
    id: 10,
    airportStart: 4,
    airportEnd: 5,
    timeStart: 23,
    timeEnd: 6,
    duration: 6,
    nextDay: true
  },
  {
    id: 11,
    airportStart: 4,
    airportEnd: 3,
    timeStart: 12,
    timeEnd: 15,
    duration: 7,
    nextDay: false
  },

  // tokyo
  {
    id: 12,
    airportStart: 5,
    airportEnd: 3,
    timeStart: 12.5,
    timeEnd: 16.5,
    duration: 9,
    nextDay: false
  },
  {
    id: 13,
    airportStart: 5,
    airportEnd: 4,
    timeStart: 12,
    timeEnd: 17,
    duration: 6,
    nextDay: false
  },
  {
    id: 14,
    airportStart: 5,
    airportEnd: 1,
    timeStart: 1,
    timeEnd: 9,
    duration: 16,
    nextDay: true
  },
]

export interface Route {
  id: number
  airportStart: number
  airportEnd: number
  timeStart: number
  timeEnd: number
  duration: number
  nextDay: boolean
};