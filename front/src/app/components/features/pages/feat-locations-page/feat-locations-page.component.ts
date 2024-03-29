import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-locations-page',
  templateUrl: './feat-locations-page.component.html',
  styleUrls: ['./feat-locations-page.component.scss']
})
export class FeatLocationsPageComponent {

  isSearchResultNotFound: boolean = false;
  
  constructor() { } 
  

  onSearchResultChange(isSearchResultNotFound: boolean): void {
    this.isSearchResultNotFound = isSearchResultNotFound;
  }
  
} 