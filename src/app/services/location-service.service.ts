import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocationInterface, LocationsInterface} from "./interfaces";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllLocations()
  {
    return this.httpClient.get<LocationsInterface>(`${environment.backendEndpoint}/location`);
  }
}
