import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitCounter } from 'src/app/models/visit-counter.model';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {

  constructor(private http: HttpClient) { }


  private readonly _BASE_URL_VISIT_COUNTER: string = "http://localhost:8080/visitCounters";


  onGetVisitCounter(): Observable<VisitCounter[]> {
    return this.http.get<VisitCounter[]>(`${this._BASE_URL_VISIT_COUNTER}/all`);
  }

  onCreateVisitCounter(visitCounter: VisitCounter): Observable<VisitCounter> {
    return this.http.post<VisitCounter>(`${this._BASE_URL_VISIT_COUNTER}/add`, visitCounter);
  }
}
