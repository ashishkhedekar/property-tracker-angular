import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {LocationInterface, LocationsInterface} from "../../services/interfaces";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  locationForm = this.formBuilder.group({
    code: '',
    name: '',
    mainImage: '',
    thumbnail: '',
    description: '',

  });

  fileToUpload: File | null = null;

  constructor(private formBuilder: FormBuilder,
              private dialogRef: MatDialogRef<AddLocationComponent>,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Your location has been created', this.locationForm.value);
    // return this.httpClient.get<LocationsInterface>(`${environment.backendEndpoint}/location`);
    this.httpClient.post<LocationInterface>(`${environment.backendEndpoint}/location`, this.locationForm.value)
      .subscribe(location => console.log("Location created"));
    this.locationForm.reset();
    this.dialogRef.close();
  }

  handleFileInput(files: FileList)
  {
    this.fileToUpload = files.item(0);
  }

}
