import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatLocationsPageComponent } from './components/features/pages/feat-locations-page/feat-locations-page.component';
import { UiHeaderComponent } from './components/ui/ui-header/ui-header.component';
import { UiNavbarComponent } from './components/ui/ui-navbar/ui-navbar.component';
import { UiSearchBarComponent } from './components/ui/ui-search-bar/ui-search-bar.component';
import { UiFooterComponent } from './components/ui/ui-footer/ui-footer.component';
import { UiSocialMediasComponent } from './components/ui/ui-social-medias/ui-social-medias.component';
import { FeatNewsCardComponent } from './components/features/others-components/feat-news-card/feat-news-card.component';
import { FeatUserLandingPageComponent } from './components/features/pages/feat-user-landing-page/feat-user-landing-page.component';
import { FeatHomePageComponent } from './components/features/pages/feat-home-page/feat-home-page.component';
import { FeatNewsCardDetailPageComponent } from './components/features/pages/feat-news-card-detail-page/feat-news-card-detail-page.component';
import { FeatErrorPageComponent } from './components/features/pages/feat-error-page/feat-error-page.component';
import { FeatContactPageComponent } from './components/features/pages/feat-contact-page/feat-contact-page.component';
import { AboutPageComponent } from './components/others-components/about-page/about-page.component';
import { FeatToContributePageComponent } from './components/features/pages/feat-to-contribute-page/feat-to-contribute-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatLocationsPageComponent,
    UiHeaderComponent,
    UiNavbarComponent,
    UiSearchBarComponent,
    UiFooterComponent,
    UiSocialMediasComponent,
    FeatNewsCardComponent,
    FeatUserLandingPageComponent,
    FeatHomePageComponent,
    FeatNewsCardDetailPageComponent,
    FeatErrorPageComponent,
    FeatContactPageComponent,
    AboutPageComponent,
    FeatToContributePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
