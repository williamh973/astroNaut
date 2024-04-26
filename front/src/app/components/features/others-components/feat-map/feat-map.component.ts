import { Component } from '@angular/core';
import { MapService } from 'src/app/shared/services/map.service';

@Component({

  selector: 'app-feat-map',
  templateUrl: './feat-map.component.html',
  styleUrls: ['./feat-map.component.scss']
})
export class FeatMapComponent  {
  

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.onInitMap();
    this.onGetMarkerData();
  }
  
  onInitMap() {
    this.mapService.onInitLeafletMap();
  };
  
  onGetMarkerData() {
    this.mapService.onGetMarkerDataForMarkerList();
  }

}