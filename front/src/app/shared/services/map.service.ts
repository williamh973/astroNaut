import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MarkerService } from './marker/marker.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any
  initialLatitude: number = 44.836433;
  initialLongitude: number = -0.578309;
  zoom: number = 6;
  markerList: MarkerData[] = [];
  filteredMarkerList: MarkerData[] = [];

  
  constructor(private markerService: MarkerService) { }
  
  
  onInitLeafletMap() {
    this.map = L.map('map').setView([this.initialLatitude, this.initialLongitude], this.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map); 
  }

  
  private removeAllMarkersInMap() {
    this.map.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });
  };
  

  onResetAllMarkersInMap() {
    this.removeAllMarkersInMap();
  
    this.markerList.forEach(marker => {
      L.marker([marker.latitude, marker.longitude]).addTo(this.map)
      .bindPopup(marker.name)
      .openPopup();
    });
  };
  

  onGetMarkerDataForMarkerList() {
    this.markerService.getMarkerDataList().subscribe(markers => {
      this.markerList = markers;
    
      this.markerList.forEach(marker => {
        L.marker([marker.latitude, marker.longitude]).addTo(this.map)
        .bindPopup(marker.name)
        .openPopup();
      });
    });
  };


  onGetFilteredMarkerList(filteredMarkerList:  MarkerData[]) {
    this.removeAllMarkersInMap();
    
    filteredMarkerList.forEach(marker => {
        L.marker([marker.latitude, marker.longitude]).addTo(this.map)
        .bindPopup(marker.name)
        .openPopup();
      });    
    };

}
