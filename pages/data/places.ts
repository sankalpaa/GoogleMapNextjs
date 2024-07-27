export type Place = {
  id: string;
  name: string;
  intro: string;
  geoPoint: {
    latitude: number;
    longitude: number;
  };
}

export const places: Place[] = [
  {
    id: "1",
    name: "Sigiriya Rock Fortress", 
    intro: "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka",
    geoPoint: {
      latitude: 7.9558296,
      longitude: 80.7572161
    },
  },
  {
    id: "2",
    name: "Dambulla Cave Temple", 
    intro: "Dambulla cave temple, also known as the Golden Temple of Dambulla, is a World Heritage Site in Sri Lanka, situated in the central part of the country.",
    geoPoint: {
      latitude: 7.8549061,
      longitude: 80.568168
    },
  },
  {
    id: "3",
    name: "Pidurangala Rock", 
    intro: "Pidurangala Rock",
    geoPoint: {
      latitude: 7.9464797,
      longitude: 80.7433713,
    },
  },
  {
    id: "4",
    name: "Uththararamaya (Gal Vihara)", 
    intro: "Uththararamaya (Gal Vihara)",
    geoPoint: {
      latitude: 7.2408854,
      longitude: 80.5894536,
    },
  },
  {
    id: "5",
    name: "Sri Dalada Maligawa", 
    intro: "Sri Dalada Maligawa",
    geoPoint: {
      latitude: 6.5544188,
      longitude: 80.82743,
    },
  },
  {
    id: "6",
    name: "Sinharaja Forest Reserve", 
    intro: "Sinharaja Forest Reserve",
    geoPoint: {
      latitude: 6.41571,
      longitude: 80.4062856
    },
  },
  {
    id: "7",
    name: "Mirissa Beach", 
    intro: "Mirissa Beach",
    geoPoint: {
      latitude: 5.9688627,
      longitude: 80.3809279 
    },
  },
  {
    id: "8",
    name: "Unawatuna Beach", 
    intro: "Unawatuna Beach",
    geoPoint: {
      latitude: 6.0180249,
      longitude: 80.2575185,
    },
  },
  {
    id: "9",
    name: "Nine Arches Bridge", 
    intro: "Nine Arches Bridge",
    geoPoint: {
      latitude: 6.8653302,
      longitude: 81.0370473,
    },
  },
  {
    id: "10",
    name: "Little Adam's Peak Trailhead", 
    intro: "Little Adam's Peak Trailhead",
    geoPoint: {
      latitude: 6.8852169,
      longitude: 81.0461011
    },
  },
  {
    id: "11",
    name: "Kabalana beach", 
    intro: "Kabalana Beach",
    geoPoint: {
      latitude: 5.9925425,
      longitude: 80.3370158
    },
  },
]