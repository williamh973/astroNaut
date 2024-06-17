import { Component, EventEmitter, Output } from '@angular/core';
import { catchError, of } from 'rxjs';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';

@Component({
  selector: 'app-feat-add-locations-form',
  templateUrl: './feat-add-locations-form.component.html',
  styleUrls: ['./feat-add-locations-form.component.scss'],
})
export class FeatAddLocationsFormComponent {
  @Output() isAddLocationFormOpen: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() isCloseButtonActivated: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  markerData: MarkerData = new MarkerData('', 0, 0);
  isLoadingComposantActive: boolean = false;
  isLocationCreatedSuccess: boolean = false;
  isLocationCreatedError: boolean = false;
  isSubmitButtonEnabled: boolean = false;

  constructor(private markerService: MarkerService) {}

  onCheckInputsCompleted() {
    this.isSubmitButtonEnabled =
      this.markerData.name.length > 2 &&
      this.markerData.name.length < 15 &&
      this.markerData.latitude !== null &&
      this.markerData.longitude !== null;
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.markerService
      .createMarkerData(this.markerData)
      .pipe(
        catchError(() => {
          this.isLoadingComposantActive = false;
          this.isLocationCreatedError = true;

          setTimeout(() => {
            this.isLocationCreatedError = false;
          }, 3000);
          return of(null);
        })
      )
      .subscribe((createdLocation) => {
        if (createdLocation !== null) {
          this.isLoadingComposantActive = false;
          this.isLocationCreatedSuccess = true;

          setTimeout(() => {
            this.isLocationCreatedSuccess = false;
          }, 3000);
        }
      });
  }

  onCloseComponent(isCloseButtonActivated: boolean) {
    if (isCloseButtonActivated) {
      this.isAddLocationFormOpen.emit(false);
    }
  }
}
