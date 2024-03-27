import { Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';

@Component({

  selector: 'app-feat-map',
  templateUrl: './feat-map.component.html',
  styleUrls: ['./feat-map.component.scss']
})
export class FeatMapComponent  {

  map: any
  markerDataList: MarkerData[] = []
  markerData: MarkerData = new MarkerData('', 0, 0);
  initialLatitude: number = 44.836433;
  initialLongitude: number = -0.578309;
  zoom: number = 6;

  constructor(private markerService: MarkerService) {}

  ngOnInit() {
    this.initMap();
    this.loadMarkers();
  }
  
  initMap() {
    this.map = L.map('map').setView([this.initialLatitude, this.initialLongitude], this.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  };
  
  loadMarkers() {
    this.markerService.getMarkerDataList().subscribe(markers => {
      this.markerDataList = markers;
      this.markerDataList.forEach(marker => {
        L.marker([marker.latitude, marker.longitude]).addTo(this.map)
          .bindPopup(marker.name)
          .openPopup();
      });
    });
  };
  
}