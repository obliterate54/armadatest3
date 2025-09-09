// Fallback places array - TODO: Replace with DB query when ready
export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  description?: string;
}

export const PLACES: Place[] = [
  {
    id: '1',
    name: 'Mulholland Drive',
    lat: 34.1341,
    lon: -118.4068,
    description: 'Iconic winding road with city views'
  },
  {
    id: '2',
    name: 'Pacific Coast Highway',
    lat: 34.0259,
    lon: -118.7798,
    description: 'Scenic coastal drive'
  },
  {
    id: '3',
    name: 'Angeles Crest Highway',
    lat: 34.2367,
    lon: -118.0648,
    description: 'Mountain canyon route'
  },
  {
    id: '4',
    name: 'Tail of the Dragon',
    lat: 35.5201,
    lon: -83.9370,
    description: '318 curves in 11 miles'
  },
  {
    id: '5',
    name: 'Blue Ridge Parkway',
    lat: 35.5951,
    lon: -82.5515,
    description: 'America\'s favorite drive'
  },
  {
    id: '6',
    name: 'Stelvio Pass',
    lat: 46.5281,
    lon: 10.4520,
    description: 'Alpine mountain pass with 48 hairpins'
  },
  {
    id: '7',
    name: 'Great Ocean Road',
    lat: -38.6643,
    lon: 143.1028,
    description: 'Australian coastal scenic route'
  },
  {
    id: '8',
    name: 'Nürburgring Nordschleife',
    lat: 50.3356,
    lon: 6.9475,
    description: 'The Green Hell racing circuit'
  }
];