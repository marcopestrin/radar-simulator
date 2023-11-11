export const airports = [
  {
    id: 1,
    timezone: 1,
    parked: [],
    hub: false,
    name: "Madrid",
    title: "MAD",
    position: {
      lat: 40.4895,
      lng: -3.5643
    }
  },
  {
    id: 2,
    timezone: 2,
    parked: [],
    hub: false,
    name: "Cape Town",
    title: "CPT",
    position: {
      lat: -33.9715,
      lng: 18.6021
    }
  },
  {
    id: 3,
    timezone: 4,
    parked: [],
    hub: true,
    name: "Dubai",
    title: "DXB",
    position: {
      lat: 25.2566,
      lng: 55.3641
    }
  },
  {
    id: 4,
    timezone: 8,
    parked: [],
    hub: false,
    name: "Singapore",
    title: "SIN",
    position: {
      lat: 1.3545,
      lng: 103.9886
    }
  },
  {
    id: 5,
    timezone: 9,
    parked: [],
    hub: true,
    name: "Tokyo",
    title: "HND",
    position: {
      lat: 35.5494,
      lng: 139.7798
    }
  },
];

export interface Airport {
  id: number
  timezone: number
  parked: Array<number>
  hub: boolean
  name: string
  title: string
  position: {
    lat: number,
    lng: number
  }
};