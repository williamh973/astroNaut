import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as L from 'leaflet';
import { MarkerData } from 'src/app/models/marker-data.model';
import { MapService } from 'src/app/shared/services/map.service';
import { MarkerService } from 'src/app/shared/services/marker/marker.service';

@Component({
  selector: 'app-ui-search-bar-locations',
  templateUrl: './ui-search-bar-locations.component.html',
  styleUrls: ['./ui-search-bar-locations.component.scss']
})
export class UiSearchBarLocationsComponent {

  @Output() isSearchResultNotFoundChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  isSearchResultNotFound: boolean = false;
  markerList: MarkerData[] = [];
  filteredMarkerList: MarkerData[] = [];
  valueInSearchInput: string = "";
  map: any
  
  
  constructor(private markerService: MarkerService, private mapService: MapService) {}
  

  ngOnInit() {
    this.onGetMarkerList();
  };

  
  private onGetMarkerList() {
    this.markerService.getMarkerDataList().subscribe(markers => {
      this.markerList = markers;
    });  
  };
  
  private onSearchTermByIncludes() {
    this.filteredMarkerList = this.markerList.filter(
      (marker: MarkerData) => (
        marker.name.toLowerCase().includes(
          this.valueInSearchInput.toLowerCase()
          )
          )
          );
          
          this.mapService.onGetFilteredMarkerList(this.filteredMarkerList)  

    this.isSearchResultNotFound = false;
    this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);
  
    this.onDisplaySearchResultNotFound();
  };
  
  private onDisplaySearchResultNotFound() {
      if (this.filteredMarkerList.length === 0) {
        this.isSearchResultNotFound = true;
        this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);
      }
  };
  
  onSearchMarker() {
    if (this.valueInSearchInput) {
      this.onSearchTermByIncludes();  
    } else {
      this.filteredMarkerList = [...this.markerList];
    }

    this.markerService.postFilterMarkerList(this.filteredMarkerList); 
  };
  
  handleClick() {
    this.filteredMarkerList = [];
    this.valueInSearchInput = '';
  };
  
  handleKeydown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    if (/^[a-z]$/.test(key)) {
      this.onSearchMarker();
    } else {
      this.mapService.resetAllMarkersInMap();
    }
  };





}
