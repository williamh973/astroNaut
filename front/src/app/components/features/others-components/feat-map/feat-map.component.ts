import { Component, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MapService } from 'src/app/shared/services/map.service';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';

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
    this.mapService.getLeafletMap();
  };
  
  onGetMarkerData() {
    this.mapService.onGetMarkerDataForMarkerList();
  }

}