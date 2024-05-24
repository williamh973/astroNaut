import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/user/auth/auth.service';

@Component({
  selector: 'app-feat-track-http-status-popup',
  templateUrl: './feat-track-http-status-popup.component.html',
  styleUrls: ['./feat-track-http-status-popup.component.scss'],
})
export class FeatTrackHttpStatusPopupComponent {
  httpError$!: Observable<HttpErrorResponse>;
  httpSuccess$!: Observable<HttpResponse<any>>;

  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;

  constructor(public httpS: AuthService) {}

  ngOnInit(): void {
    this.httpError$ = this.httpS.getHttpErrorSubject$();
    this.httpSuccess$ = this.httpS.getHttpSuccessSubject$();

    this.httpError$.subscribe((error: HttpErrorResponse) => {
      this.showErrorMessage = true;
    });

    this.httpSuccess$.subscribe((response: HttpResponse<any>) => {
      this.showSuccessMessage = true;
      console.log(response);
    });
  }
}
