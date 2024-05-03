import { Component, Input } from '@angular/core';
import { Feedback } from 'src/app/models/feedback-message.model';

@Component({
  selector: 'app-feat-feedback-messages-popup',
  templateUrl: './feat-feedback-messages-popup.component.html',
  styleUrls: ['./feat-feedback-messages-popup.component.scss']
})
export class FeatFeedbackMessagesPopupComponent {

  @Input() isNewsCardCreatedSuccess!: boolean;
  @Input() isNewsCardCreatedError!: boolean;
  @Input() isLocationCreatedSuccess!: boolean; 
  @Input() isLocationCreatedError!: boolean; 
  @Input() isContactTextCreatedSuccess!: boolean; 
  @Input() isContactTextCreatedError!: boolean; 
  @Input() isPictureOfWeekCardCreatedSuccess!: boolean; 
  @Input() isPictureOfWeekCardCreatedError!: boolean; 
  
  feedback: Feedback = new Feedback("");


  ngOnInit() {
    this.onShowNewsCardFeedback();
    this.onShowLocationFeedback();
    this.onShowContactTextFeedback();
    this.onShowPictureOfWeekCardFeedback();
  }
  
  
  onShowNewsCardFeedback() {
    if (this.isNewsCardCreatedSuccess) {
      this.feedback = new Feedback("Post créé avec succès !");
    } else if (this.isNewsCardCreatedError) {
      this.feedback = new Feedback("Une erreur s'est produite, veuillez recommencer ulterieurement.");
    } else {
      this.feedback = new Feedback("");
    };
};

onShowLocationFeedback() {
  if (this.isLocationCreatedSuccess) {
    this.feedback = new Feedback("Votre point d'observation a été créé avec succès !");
  } else if (this.isLocationCreatedError) {
    this.feedback = new Feedback("Une erreur s'est produite, veuillez recommencer ulterieurement.");
  } else {
    this.feedback = new Feedback("");
  };
};

onShowContactTextFeedback() {
  if (this.isContactTextCreatedSuccess) {
    this.feedback = new Feedback("Votre message a été envoyé avec succès !");
  } else if (this.isContactTextCreatedError) {
    this.feedback = new Feedback("Une erreur s'est produite, veuillez recommencer ulterieurement.");
  } else {
    this.feedback = new Feedback("");
  };
}

onShowPictureOfWeekCardFeedback() {
  if (this.isPictureOfWeekCardCreatedSuccess) {
    this.feedback = new Feedback("Votre photo a été envoyé avec succès et est en attente de validation.");
  } else if (this.isPictureOfWeekCardCreatedError) {
    this.feedback = new Feedback("Une erreur s'est produite, veuillez recommencer ulterieurement.");
  } else {
    this.feedback = new Feedback("");
  };
}
}
