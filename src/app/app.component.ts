import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddLocationComponent} from "./components/add-location/add-location.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-tracker-angular';
  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    console.log("going to open ");
    const dialogRef = this.dialog.open(AddLocationComponent);
    dialogRef.afterClosed().subscribe(() => window.location.reload());
  }
}
