import { Component, Input } from '@angular/core';
import { Feedback } from 'src/app/models/feedback-message.model';

@Component({
  selector: 'app-feat-feedback-messages-popup',
  templateUrl: './feat-feedback-messages-popup.component.html',
  styleUrls: ['./feat-feedback-messages-popup.component.scss'],
})
export class FeatFeedbackMessagesPopupComponent {
  @Input() isNewsCardCreatedSuccess!: boolean;
  @Input() isNewsCardCreatedError!: boolean;
  @Input() isLocationCreatedSuccess!: boolean;
  @Input() isLocationCreatedError!: boolean;
  @Input() isContactTextCreatedSuccess!: boolean;
  @Input() isContactTextCreatedError!: boolean;
  @Input() isPictureAuthorCardCreatedSuccess!: boolean;
  @Input() isPictureAuthorCardCreatedError!: boolean;
  @Input() isPictureSpecialEventCardCreatedSuccess!: boolean;
  @Input() isPictureSpecialEventCardCreatedError!: boolean;
  @Input() isCommentCreatedSuccess!: boolean;
  @Input() isCommentCreatedError!: boolean;
  @Input() isUserNotConnectedError!: boolean;

  feedback: Feedback = new Feedback('');

  ngOnInit() {
    this.onShowNewsCardFeedback();
    this.onShowLocationFeedback();
    this.onShowContactTextFeedback();
    this.onShowPictureAuthorCardFeedback();
    this.onShowPictureSpecialEventCardFeedback();
    this.onShowCommentFeedback();
    this.onUserNotConnected();
  }

  onShowNewsCardFeedback() {
    if (this.isNewsCardCreatedSuccess) {
      this.feedback = new Feedback('Post créé avec succès !');
    } else if (this.isNewsCardCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onShowLocationFeedback() {
    if (this.isLocationCreatedSuccess) {
      this.feedback = new Feedback(
        "Votre point d'observation a été créé avec succès !"
      );
    } else if (this.isLocationCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onShowContactTextFeedback() {
    if (this.isContactTextCreatedSuccess) {
      this.feedback = new Feedback('Votre message a été envoyé avec succès !');
    } else if (this.isContactTextCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onShowPictureAuthorCardFeedback() {
    if (this.isPictureAuthorCardCreatedSuccess) {
      this.feedback = new Feedback(
        'Votre photo a été envoyé avec succès et est en attente de validation.'
      );
    } else if (this.isPictureAuthorCardCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onShowPictureSpecialEventCardFeedback() {
    if (this.isPictureSpecialEventCardCreatedSuccess) {
      this.feedback = new Feedback(
        'Votre photo a été envoyé avec succès et est en attente de validation.'
      );
    } else if (this.isPictureSpecialEventCardCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onShowCommentFeedback() {
    if (this.isCommentCreatedSuccess) {
      this.feedback = new Feedback(
        'Votre commentaire a été envoyé avec succès.'
      );
    } else if (this.isCommentCreatedError) {
      this.feedback = new Feedback(
        "Une erreur s'est produite, veuillez recommencer ulterieurement."
      );
    } else {
      this.feedback = new Feedback('');
    }
  }

  onUserNotConnected() {
    if (this.isUserNotConnectedError) {
      this.feedback = new Feedback(
        'Vous devez être connecté pour réaliser cette action.'
      );
    }
  }
}
