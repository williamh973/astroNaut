import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';


@Component({
  selector: 'app-feat-add-locations-form',
  templateUrl: './feat-add-locations-form.component.html',
  styleUrls: ['./feat-add-locations-form.component.scss']
})
export class FeatAddLocationsFormComponent {

markerData: MarkerData = new MarkerData('', 0, 0);
isLoadingComposantActive: boolean = false;
isLocationCreatedSuccess: boolean = false; 
isLocationCreatedError: boolean = false; 


constructor(private markerService: MarkerService) {} 


  onSubmit() {
    this.isLoadingComposantActive = true;
    this.markerService.createMarkerData(this.markerData)
      .pipe(
        catchError(
          () => {
          this.isLoadingComposantActive = false;
          this.isLocationCreatedError = true;
          
          setTimeout(() => {
            this.isLocationCreatedError = false;
          }, 3000);
          return of(null);
        })
      ).subscribe(createdLocation => {
        if (createdLocation !== null) {
          this.isLoadingComposantActive = false;
          this.isLocationCreatedSuccess = true;

          setTimeout(() => {
            this.isLocationCreatedSuccess = false;
          }, 3000);
        }
      });
  }
  
}