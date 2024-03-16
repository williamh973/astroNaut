import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatUserLandingPageComponent } from './components/features/pages/feat-user-landing-page/feat-user-landing-page.component';
import { FeatHomePageComponent } from './components/features/pages/feat-home-page/feat-home-page.component';
import { FeatLocationsPageComponent } from './components/features/pages/feat-locations-page/feat-locations-page.component';
import { FeatNewsCardDetailPageComponent } from './components/features/pages/feat-news-card-detail-page/feat-news-card-detail-page.component';
import { FeatErrorPageComponent } from './components/features/pages/feat-error-page/feat-error-page.component';
import { FeatToContributePageComponent } from './components/features/pages/feat-to-contribute-page/feat-to-contribute-page.component';
import { AboutPageComponent } from './components/others-components/about-page/about-page.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'/home', 
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
    path: 'news-card-detail/:id', 
    component: FeatNewsCardDetailPageComponent 
  },
  { 
    path: 'user-space', 
    component: FeatUserLandingPageComponent, 
    // canActivate: [AuthGuard]
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