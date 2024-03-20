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
import { FeatNewsCardListComponent } from './components/others-components/feat-news-card-list/feat-news-card-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSearchBarHomeComponent } from './components/ui/ui-search-bar-home/ui-search-bar-home.component';
import { UiSearchBarLocationsComponent } from './components/ui/ui-search-bar-locations/ui-search-bar-locations.component';
import { FeatLoginOrRegisterFormPopupComponent } from './components/features/popups/feat-login-or-register-form-popup/feat-login-or-register-form-popup.component';
import { FeatGaleryPageComponent } from './components/features/pages/feat-galery-page/feat-galery-page.component';
import { FeatRegisterFormPopupComponent } from './components/features/popups/feat-register-form-popup/feat-register-form-popup.component';
import { FeatLoginFormPopupComponent } from './components/features/popups/feat-login-form-popup/feat-login-form-popup.component';
import { FeatAddLocationsFormComponent } from './components/features/others-components/feat-add-locations-form/feat-add-locations-form.component';
import { FeatAddImageFormComponent } from "./components/features/others-components/feat-add-image-form/feat-add-image-form.component";


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
    FeatToContributePageComponent,
    FeatNewsCardListComponent,
    UiSearchBarHomeComponent,
    UiSearchBarLocationsComponent,
    FeatLoginOrRegisterFormPopupComponent,
    FeatGaleryPageComponent,
    FeatRegisterFormPopupComponent,
    FeatLoginFormPopupComponent,
    FeatAddImageFormComponent,
    FeatAddLocationsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
