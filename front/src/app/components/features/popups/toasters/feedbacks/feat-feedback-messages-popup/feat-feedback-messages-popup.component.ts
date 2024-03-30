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
  
  feedback: Feedback = new Feedback("");


  ngOnInit() {
    this.onShowNewsCardFeedback();
    this.onShowLocationFeedback();
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
    this.feedback = new Feedback("Votre point d'observation a créé avec succès !");
  } else if (this.isLocationCreatedError) {
    this.feedback = new Feedback("Une erreur s'est produite, veuillez recommencer ulterieurement.");
  } else {
    this.feedback = new Feedback("");
  };
}

}
