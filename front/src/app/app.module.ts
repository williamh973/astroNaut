import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/firebase-environment';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './core/token-interceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeatLocationsPageComponent } from './components/features/pages/feat-locations-page/feat-locations-page.component';
import { UiHeaderComponent } from './components/ui/ui-header/ui-header.component';
import { UiNavbarComponent } from './components/ui/ui-navbar/ui-navbar.component';
import { UiFooterComponent } from './components/ui/ui-footer/ui-footer.component';
import { UiSocialMediasComponent } from './components/ui/ui-social-medias/ui-social-medias.component';
import { FeatNewsCardComponent } from './components/features/others-components/feat-news-card/feat-news-card.component';
import { FeatUserLandingPageComponent } from './components/features/pages/feat-user-landing-page/feat-user-landing-page.component';
import { FeatHomePageComponent } from './components/features/pages/feat-home-page/feat-home-page.component';
import { FeatNewsCardDetailPageComponent } from './components/features/pages/feat-news-card-detail-page/feat-news-card-detail-page.component';
import { FeatErrorPageComponent } from './components/features/pages/feat-error-page/feat-error-page.component';
import { AboutPageComponent } from './components/others-components/about-page/about-page.component';
import { FeatToContributePageComponent } from './components/features/pages/feat-to-contribute-page/feat-to-contribute-page.component';
import { FeatNewsCardListComponent } from './components/features/others-components/feat-news-card-list/feat-news-card-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSearchBarHomeComponent } from './components/ui/ui-search-bar-home/ui-search-bar-home.component';
import { UiSearchBarLocationsComponent } from './components/ui/ui-search-bar-locations/ui-search-bar-locations.component';
import { FeatLoginOrRegisterPopupComponent } from './components/features/popups/feat-login-or-register-popup/feat-login-or-register-popup.component';
import { FeatGaleryPageComponent } from './components/features/pages/feat-galery-page/feat-galery-page.component';
import { FeatRegisterFormPopupComponent } from './components/features/popups/forms/feat-register-form-popup/feat-register-form-popup.component';
import { FeatLoginFormPopupComponent } from './components/features/popups/forms/feat-login-form-popup/feat-login-form-popup.component';
import { FeatAddLocationsFormComponent } from './components/features/others-components/user/feat-add-locations-form/feat-add-locations-form.component';
import { FeatAddImageFormComponent } from './components/features/others-components/user/feat-add-image-form/feat-add-image-form.component';
import { FeatMapComponent } from './components/features/others-components/feat-map/feat-map.component';
import { FeatAdminLandingPageComponent } from './components/features/pages/feat-admin-landing-page/feat-admin-landing-page.component';
import { FeatEditNewsCardFormComponent } from './components/features/others-components/admin/feat-add-news-card-form/feat-edit-news-card-form.component';
import { FeatFeedbackMessagesPopupComponent } from './components/features/popups/toasters/feedbacks/feat-feedback-messages-popup/feat-feedback-messages-popup.component';
import { FeatLoaderPopupComponent } from './components/features/popups/feat-loader-popup/feat-loader-popup.component';
import { FeatSearchResultNotFoundComponent } from './components/features/others-components/feat-search-result-not-found/feat-search-result-not-found.component';
import { FeatVisitsCounterComponent } from './components/features/others-components/feat-visits-counter/feat-visits-counter.component';
import { UiTitleSubtitleComponent } from './components/ui/ui-title-subtitle/ui-title-subtitle.component';
import { UiTitleComponent } from './components/ui/ui-title/ui-title.component';
import { UiGalleryNavbarComponent } from './components/ui/ui-gallery-navbar/ui-gallery-navbar.component';
import { FeatPicturesOfWeekPageComponent } from './components/features/pages/feat-pictures-of-week-page/feat-pictures-of-week-page.component';
import { FeatPicturesSpecialEventsPageComponent } from './components/features/pages/feat-pictures-special-events-page/feat-pictures-special-events-page.component';
import { FeatPicturesAuthorsPageComponent } from './components/features/pages/feat-pictures-authors-page/feat-pictures-authors-page.component';
import { FeatPicturesCompetitionPageComponent } from './components/features/pages/feat-pictures-competition-page/feat-pictures-competition-page.component';
import { FeatPicturesSpacecraftsPageComponent } from './components/features/pages/feat-pictures-spacecrafts-page/feat-pictures-spacecrafts-page.component';
import { FeatPictureOfWeekCardComponent } from './components/features/others-components/feat-picture-of-week-card/feat-picture-of-week-card.component';
import { FeatPictureOfWeekListThumbnailComponent } from './components/features/others-components/feat-picture-of-week-list-thumbnail/feat-picture-of-week-list-thumbnail.component';
import { UiCarouselNavComponent } from './components/ui/ui-carousel-nav/ui-carousel-nav.component';
import { UiBurgerMenuButtonComponent } from './components/ui/ui-burger-menu-button/ui-burger-menu-button.component';
import { FeatPictureSpecialEventCardComponent } from './components/features/others-components/feat-picture-special-event-card/feat-picture-special-event-card.component';
import { UiThematicDropdownMenuComponent } from './components/ui/ui-thematic-dropdown-menu/ui-thematic-dropdown-menu.component';
import { FeatAddSpecialEventImagesFormComponent } from './components/features/others-components/feat-add-special-event-images-form/feat-add-special-event-images-form.component';
import { UiOurSolarSystemDropdownMenuComponent } from './components/ui/ui-our-solar-system-dropdown-menu/ui-our-solar-system-dropdown-menu.component';
import { FeatPictureAuthorCardComponent } from './components/features/others-components/feat-picture-author-card/feat-picture-author-card.component';
import { FeatCommentCardComponent } from './components/features/others-components/feat-comment-card/feat-comment-card.component';
import { FeatAddCommentCardFormComponent } from './components/features/others-components/user/feat-add-comment-card-form/feat-add-comment-card-form.component';
import { FeatCommentCardListComponent } from './components/features/others-components/feat-comment-card-list/feat-comment-card-list.component';
import { FeatTrackHttpStatusPopupComponent } from './components/features/popups/toasters/feat-track-http-status-popup/feat-track-http-status-popup.component';
import { FeatLandingPageComponent } from './components/features/pages/feat-landing-page/feat-landing-page.component';
import { UiCloseIconComponent } from './shared/icons/ui-close-icon/ui-close-icon.component';
import { UiButtonComponent } from './shared/buttons/ui-button/ui-button.component';
import { QuillModule } from 'ngx-quill';
import { FeatEditNewsCardFormStep1Component } from './components/features/others-components/admin/feat-add-news-card-form/feat-edit-news-card-form-step1/feat-edit-news-card-form-step1.component';
import { FeatEditNewsCardFormStep2Component } from './components/features/others-components/admin/feat-add-news-card-form/feat-edit-news-card-form-step2/feat-edit-news-card-form-step2.component';
import { UiPersonIconComponent } from './shared/icons/ui-person-icon/ui-person-icon.component';
import { UiEmailIconComponent } from './shared/icons/ui-email-icon/ui-email-icon.component';
import { UiPasswordIconComponent } from './shared/icons/ui-password-icon/ui-password-icon.component';
import { UiUpdateIconComponent } from './shared/icons/ui-update-icon/ui-update-icon.component';
import { UiDeleteIconComponent } from './shared/icons/ui-delete-icon/ui-delete-icon.component';
import { UiAuthFailIconComponent } from './shared/icons/ui-auth-fail-icon/ui-auth-fail-icon.component';
import { UiAuthSuccessIconComponent } from './shared/icons/ui-auth-success-icon/ui-auth-success-icon.component';
import { UiLikeIconComponent } from './shared/icons/ui-like-icon/ui-like-icon.component';
import { UiDislikeIconComponent } from './shared/icons/ui-dislike-icon/ui-dislike-icon.component';
import { UiFeedSuccessIconComponent } from './shared/icons/ui-feed-success-icon/ui-feed-success-icon.component';
import { UiFeedErrorIconComponent } from './shared/icons/ui-feed-error-icon/ui-feed-error-icon.component';
import { UiHomeIconComponent } from './shared/icons/ui-home-icon/ui-home-icon.component';
import { UiPhoneIconComponent } from './shared/icons/ui-phone-icon/ui-phone-icon.component';
import { UiAdminLandingNavbarComponent } from './components/ui/ui-admin-landing-navbar/ui-admin-landing-navbar.component';
import { FeatContactListComponent } from './components/features/others-components/admin/feat-contact-list/feat-contact-list.component';
import { FeatContactCardComponent } from './components/features/others-components/admin/feat-contact-card/feat-contact-card.component';
import { FeatContactFormPopupComponent } from './components/features/popups/forms/feat-contact-form-popup/feat-contact-form-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatLocationsPageComponent,
    UiHeaderComponent,
    UiNavbarComponent,
    UiFooterComponent,
    UiSocialMediasComponent,
    FeatNewsCardComponent,
    FeatUserLandingPageComponent,
    FeatHomePageComponent,
    FeatNewsCardDetailPageComponent,
    FeatErrorPageComponent,
    AboutPageComponent,
    FeatToContributePageComponent,
    FeatNewsCardListComponent,
    UiSearchBarHomeComponent,
    UiSearchBarLocationsComponent,
    FeatLoginOrRegisterPopupComponent,
    FeatGaleryPageComponent,
    FeatRegisterFormPopupComponent,
    FeatLoginFormPopupComponent,
    FeatAddImageFormComponent,
    FeatAddLocationsFormComponent,
    FeatMapComponent,
    FeatAdminLandingPageComponent,
    FeatEditNewsCardFormComponent,
    FeatFeedbackMessagesPopupComponent,
    FeatLoaderPopupComponent,
    FeatSearchResultNotFoundComponent,
    FeatVisitsCounterComponent,
    UiTitleSubtitleComponent,
    UiTitleComponent,
    UiGalleryNavbarComponent,
    FeatPicturesOfWeekPageComponent,
    FeatPicturesSpecialEventsPageComponent,
    FeatPicturesAuthorsPageComponent,
    FeatPicturesCompetitionPageComponent,
    FeatPicturesSpacecraftsPageComponent,
    FeatPictureOfWeekCardComponent,
    FeatPictureOfWeekListThumbnailComponent,
    UiCarouselNavComponent,
    UiBurgerMenuButtonComponent,
    FeatPictureSpecialEventCardComponent,
    UiThematicDropdownMenuComponent,
    FeatAddSpecialEventImagesFormComponent,
    UiOurSolarSystemDropdownMenuComponent,
    FeatPictureAuthorCardComponent,
    FeatCommentCardComponent,
    FeatAddCommentCardFormComponent,
    FeatCommentCardListComponent,
    FeatTrackHttpStatusPopupComponent,
    FeatLandingPageComponent,
    UiCloseIconComponent,
    UiButtonComponent,
    FeatEditNewsCardFormStep1Component,
    FeatEditNewsCardFormStep2Component,
    UiPersonIconComponent,
    UiEmailIconComponent,
    UiPasswordIconComponent,
    UiUpdateIconComponent,
    UiDeleteIconComponent,
    UiAuthFailIconComponent,
    UiAuthSuccessIconComponent,
    UiLikeIconComponent,
    UiDislikeIconComponent,
    UiFeedSuccessIconComponent,
    UiFeedErrorIconComponent,
    UiHomeIconComponent,
    UiPhoneIconComponent,
    UiAdminLandingNavbarComponent,
    FeatContactListComponent,
    FeatContactCardComponent,
    FeatContactFormPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxDropzoneModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
