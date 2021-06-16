import { Component, OnInit } from '@angular/core';
import {LocationInterface} from "../../services/interfaces";
import {LocationServiceService} from "../../services/location-service.service";

@Component({
  selector: 'app-location-container',
  templateUrl: './location-container.component.html',
  styleUrls: ['./location-container.component.css']
})
export class LocationContainerComponent implements OnInit {

  locations = Array<LocationInterface>();

  constructor(private locationService: LocationServiceService) { }

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe(locationsWrapper => this.locations = locationsWrapper.locations);
  }

}
