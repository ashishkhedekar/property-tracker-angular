export interface LocationInterface {
  code: string;
  name: string;
  mainImage: string;
  thumbnail: string;
  description: string;
}

export interface LocationsInterface {
  locations: Array<LocationInterface>;
}
