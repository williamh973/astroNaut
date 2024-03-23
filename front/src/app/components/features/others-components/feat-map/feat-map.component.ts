import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerData } from 'src/app/models/marker-data.model';

@Component({
  selector: 'app-feat-map',
  templateUrl: './feat-map.component.html',
  styleUrls: ['./feat-map.component.scss']
})
export class FeatMapComponent implements AfterViewInit  {

  markerData: MarkerData = new MarkerData('', 0, 0);
  markerDataList: MarkerData[] = []

  ngAfterViewInit() {
    let initialLatitude = 44.836433;
    let initialLongitude = -0.578309;
    let markerDataPosLatitude = 44.836433;
    let markerDataPosLongitude = -0.578309;
    let zoom = 6;
    const map = L.map('map').setView([
      initialLatitude, 
      initialLongitude
    ], 
    zoom
    );
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    
    L.marker([
      markerDataPosLatitude, 
      markerDataPosLongitude
    ]).addTo(map)     
    .bindPopup('Point of view')
    .openPopup();
    

  }
}
