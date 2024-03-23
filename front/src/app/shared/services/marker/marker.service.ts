import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkerData } from "src/app/models/marker-data.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  markerDataList: MarkerData[] = [];

  constructor(private http: HttpClient) { }

  private readonly _BASE_URL_MARKER_DATA: string = "http://localhost:8080/markerDatas";


  getMarkerDataList(): Observable<MarkerData[]> {
    return this.http.get<MarkerData[]>(`${this._BASE_URL_MARKER_DATA}/all`);
  }

  createMarkerData(markerData: MarkerData): Observable<MarkerData> {
    return this.http.post<MarkerData>(`${this._BASE_URL_MARKER_DATA}/add`, markerData);
  }

  updateMarkerData(markerData: MarkerData): Observable<MarkerData> {
    return this.http.put<MarkerData>(`${this._BASE_URL_MARKER_DATA}/update/${markerData.id}`, markerData);
  } 

  deleteMarkerData(id: number): Observable<void> {
    return this.http.delete<void>(`${this._BASE_URL_MARKER_DATA}/delete/${id}`);
  }

  

}
