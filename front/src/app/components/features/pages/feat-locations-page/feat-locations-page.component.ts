import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-feat-locations-page',
  templateUrl: './feat-locations-page.component.html',
  styleUrls: ['./feat-locations-page.component.scss']
})
export class FeatLocationsPageComponent implements AfterViewInit {

  constructor() { } 

  ngAfterViewInit(): void {
    let initialLatitude = 44.836433;
    let initialLongitude = -0.578309;
    let markerPosLatitude = 44.836433;
    let markerPosLongitude = -0.578309;
    let zoom = 6;
    const map = L.map('map').setView([initialLatitude, initialLongitude], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([markerPosLatitude, markerPosLongitude]).addTo(map)
      .bindPopup('Point of view!')
      .openPopup();
  }
} 