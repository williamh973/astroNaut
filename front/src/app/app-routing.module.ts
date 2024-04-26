import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatUserLandingPageComponent } from './components/features/pages/feat-user-landing-page/feat-user-landing-page.component';
import { FeatHomePageComponent } from './components/features/pages/feat-home-page/feat-home-page.component';
import { FeatLocationsPageComponent } from './components/features/pages/feat-locations-page/feat-locations-page.component';
import { FeatNewsCardDetailPageComponent } from './components/features/pages/feat-news-card-detail-page/feat-news-card-detail-page.component';
import { FeatErrorPageComponent } from './components/features/pages/feat-error-page/feat-error-page.component';
import { FeatToContributePageComponent } from './components/features/pages/feat-to-contribute-page/feat-to-contribute-page.component';
import { AboutPageComponent } from './components/others-components/about-page/about-page.component';
import { FeatContactPageComponent } from './components/features/pages/feat-contact-page/feat-contact-page.component';
import { FeatGaleryPageComponent } from './components/features/pages/feat-galery-page/feat-galery-page.component';
import { FeatPicturesOfWeekPageComponent } from './components/features/pages/feat-pictures-of-week-page/feat-pictures-of-week-page.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'/news', 
    pathMatch: 'full'
    
  },
  { 
    path: 'news', 
    component: FeatHomePageComponent
  },
  { 
    path: 'locations', 
    component: FeatLocationsPageComponent
  },
  { 
    path: 'to-contribute', 
    component: FeatToContributePageComponent
  },
  { 
    path: 'about', 
    component: AboutPageComponent 
  },
  { 
    path: 'news-card-details/:id', 
    component: FeatNewsCardDetailPageComponent 
  },
  { 
    path: 'galery', 
    component: FeatGaleryPageComponent
  },
  { 
    path: 'contact', 
    component: FeatContactPageComponent 
  },
  { 
    path: 'user-space', 
    component: FeatUserLandingPageComponent, 
    // canActivate: [AuthGuard]
  },
  { 
    path: 'astronaut/gallery/pictures-of-the-week', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: 'astronaut/gallery/thematic', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: 'astronaut/gallery/pictures-of-special-events', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: 'astronaut/gallery/authors', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: 'astronaut/gallery/competition', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: 'astronaut/gallery/spacecrafts', 
    component: FeatPicturesOfWeekPageComponent, 
  },
  { 
    path: '**', 
    component: FeatErrorPageComponent 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
