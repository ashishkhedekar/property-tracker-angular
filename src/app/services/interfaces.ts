export interface LocationInterface {
  code: string;
  name: string;
  mainImage: string;
  thumbnail: string;
  description: string;
  numberOfSoldProperties: number;
  numberOfProperties: number;
}

export interface LocationsInterface {
  locations: Array<LocationInterface>;
}
