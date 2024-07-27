export type Place = {
  name: string;
  intro: string;
  geoPoint: {
    latitude: number;
    longitude: number;
  };
}

export const places: Place[] = [
  {
    name: "Sigiriya Rock Fortress", 
    intro: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka",
    geoPoint: {
      latitude: 7.9558296,
      longitude: 80.7572161
    }
  },
  {
    name: "Dambulla Cave Temple", 
    intro: "Dambulla cave temple, also known as the Golden Temple of Dambulla, is a World Heritage Site in Sri Lanka, situated in the central part of the country.",
    geoPoint: {
      latitude: 7.8549061,
      longitude: 80.568168
    }
  },
]