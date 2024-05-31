import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-admin-landing-page',
  templateUrl: './feat-admin-landing-page.component.html',
  styleUrls: ['./feat-admin-landing-page.component.scss'],
})
export class FeatAdminLandingPageComponent {
  isAddNewsCardFormOpen: boolean = false;

  ngOnInit() {}

  onAddNewsCardFormOpen() {
    this.isAddNewsCardFormOpen = !this.isAddNewsCardFormOpen;
  }
}
