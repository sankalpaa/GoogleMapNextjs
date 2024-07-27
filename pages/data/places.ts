export type Place = {
  name: string;
  geoPoint: {
    latitude: number;
    longitude: number;
  };
}

export const places: Place[] = [
  {
    name: "Sigiriya Rock Fortress", geoPoint: {
      latitude: 7.9558296,
      longitude: 80.7572161
    }
  },
  {
    name: "Dambulla Cave Temple", geoPoint: {
      latitude: 7.8549061,
      longitude: 80.568168
    }
  },
]