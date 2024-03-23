import { Component } from '@angular/core';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-feat-add-locations-form',
  templateUrl: './feat-add-locations-form.component.html',
  styleUrls: ['./feat-add-locations-form.component.scss']
})
export class FeatAddLocationsFormComponent {

markerData: MarkerData = new MarkerData('', 0, 0);


constructor(private markerService: MarkerService) {} 

  onSubmit() {
    this.markerService.createMarkerData(this.markerData).subscribe(
     );
  }

}
