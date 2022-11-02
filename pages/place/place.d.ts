type Location = {
  city: string;
  country: string;
};

export interface Place {
  slug: string;
  location: Location;
  imagePath: string;
  description: string;
  rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  duration: string;
  distance: number;
  googleMapLink: string;
  mapImage: string;
}
