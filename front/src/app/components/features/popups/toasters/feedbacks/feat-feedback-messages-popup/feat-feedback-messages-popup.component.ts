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
  @Input() isNewsCardUpdatedSuccess!: boolean;
  @Input() isNewsCardUpdatedError!: boolean;
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

  private feedbacksList = {
    isNewsCardCreatedSuccess: 'Actualité mise en ligne avec succès !',
    isNewsCardCreatedError:
      "Une erreur s'est produite lors de la création de l'actualité.",
    isNewsCardUpdatedSuccess: 'Actualité modifiée avec succès !',
    isNewsCardUpdatedError:
      "Une erreur s'est produite lors de la modification de l'actualité.",
    isLocationCreatedSuccess: 'Localisation créée avec succès !',
    isLocationCreatedError:
      "Une erreur s'est produite lors de la création de la localisation.",
    isContactTextCreatedSuccess: 'Texte de contact créé avec succès !',
    isContactTextCreatedError:
      "Une erreur s'est produite lors de la création du texte de contact.",
    isPictureAuthorCardCreatedSuccess:
      "Carte d'auteur de photo créée avec succès !",
    isPictureAuthorCardCreatedError:
      "Une erreur s'est produite lors de la création de la carte d'auteur de photo.",
    isPictureSpecialEventCardCreatedSuccess:
      "Carte d'événement spécial créée avec succès !",
    isPictureSpecialEventCardCreatedError:
      "Une erreur s'est produite lors de la création de la carte d'événement spécial.",
    isCommentCreatedSuccess: 'Commentaire créé avec succès !',
    isCommentCreatedError:
      "Une erreur s'est produite lors de la création du commentaire.",
    isUserNotConnectedError:
      'Vous devez être connecté pour effectuer cette action.',
  };

  ngOnInit() {
    this.showFeedback();
  }

  private showFeedback() {
    for (const key in this.feedbacksList) {
      if ((this as any)[key]) {
        this.feedback = new Feedback((this.feedbacksList as any)[key]);
        console.log(this.feedback);
        return;
      }
    }

    this.feedback = new Feedback('');
  }
}
