export interface LocationInterface {
  code: string;
  name: string;
  mainImage: string;
  thumbnail: string;
  description: string;
  numberOfProperties: number;
  numberOfSoldInLast24Hours: number;
  numberOfSoldInLast30Days: number;
  numberOfNewInLast24Hours: number;
  numberOfNewInLast30Days: number;
}

export interface LocationsInterface {
  locations: Array<LocationInterface>;
}
