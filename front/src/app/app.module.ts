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

@NgModule({
  declarations: [
    AppComponent,
    FeatLocationsPageComponent,
    UiHeaderComponent,
    UiNavbarComponent,
    UiSearchBarComponent,
    UiFooterComponent,
    UiSocialMediasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
