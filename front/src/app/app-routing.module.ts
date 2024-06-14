import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatHomePageComponent } from './components/features/pages/feat-home-page/feat-home-page.component';
import { FeatLocationsPageComponent } from './components/features/pages/feat-locations-page/feat-locations-page.component';
import { FeatNewsCardDetailPageComponent } from './components/features/pages/feat-news-card-detail-page/feat-news-card-detail-page.component';
import { FeatErrorPageComponent } from './components/features/pages/feat-error-page/feat-error-page.component';
import { FeatToContributePageComponent } from './components/features/pages/feat-to-contribute-page/feat-to-contribute-page.component';
import { AboutPageComponent } from './components/others-components/about-page/about-page.component';
import { FeatPicturesOfWeekPageComponent } from './components/features/pages/feat-pictures-of-week-page/feat-pictures-of-week-page.component';
import { FeatPicturesSpecialEventsPageComponent } from './components/features/pages/feat-pictures-special-events-page/feat-pictures-special-events-page.component';
import { FeatPicturesAuthorsPageComponent } from './components/features/pages/feat-pictures-authors-page/feat-pictures-authors-page.component';
import { AuthGuard } from './core/auth.guard';
import { FeatLandingPageComponent } from './components/features/pages/feat-landing-page/feat-landing-page.component';
import { FeatContactFormPopupComponent } from './components/features/popups/forms/feat-contact-form-popup/feat-contact-form-popup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'astronaut/news',
    pathMatch: 'full',
  },
  {
    path: 'astronaut/news',
    component: FeatHomePageComponent,
  },
  {
    path: 'astronaut/locations',
    component: FeatLocationsPageComponent,
  },
  {
    path: 'astronaut/to-contribute',
    component: FeatToContributePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'astronaut/about',
    component: AboutPageComponent,
  },
  {
    path: 'news-card-details/:id',
    component: FeatNewsCardDetailPageComponent,
  },
  {
    path: 'astronaut/gallery/pictures-of-the-week',
    component: FeatPicturesOfWeekPageComponent,
  },
  {
    path: 'astronaut/contact/form',
    component: FeatContactFormPopupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'astronaut/landing-page',
    component: FeatLandingPageComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'astronaut/gallery/thematic',
  //   component: FeatPicturesOfWeekPageComponent,
  // },
  {
    path: 'astronaut/gallery/pictures-of-special-events',
    component: FeatPicturesSpecialEventsPageComponent,
  },
  {
    path: 'astronaut/gallery/pictures-of-authors',
    component: FeatPicturesAuthorsPageComponent,
  },
  // {
  //   path: 'astronaut/gallery/competition',
  //   component: FeatPicturesOfWeekPageComponent,
  // },
  // {
  //   path: 'astronaut/gallery/spacecrafts',
  //   component: FeatPicturesOfWeekPageComponent,
  // },
  {
    path: '**',
    component: FeatErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
