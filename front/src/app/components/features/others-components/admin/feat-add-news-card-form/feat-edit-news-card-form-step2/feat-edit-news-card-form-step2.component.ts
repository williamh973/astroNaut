import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, finalize, of } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { Picture } from 'src/app/models/images-for-cards/image-for-news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { PictureService } from 'src/app/shared/services/image-for-card/picture/picture.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';

@Component({
  selector: 'app-feat-edit-news-card-form-step2',
  templateUrl: './feat-edit-news-card-form-step2.component.html',
  styleUrls: ['./feat-edit-news-card-form-step2.component.scss'],
})
export class FeatEditNewsCardFormStep2Component {
  @Input() currentStep!: number;
  @Input() newsCard!: NewsCard;
  @Input() adminMail!: string;
  @Input() isAdminMod!: boolean;
  @Input() isCreateMod!: boolean;
  @Input() isUpdateMod!: boolean;
  @Output() onGoToStep1: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCloseAllStepsFormEmit: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  photosList: File[] = [];
  isCloseButtonActivated: boolean = false;
  isPhotoInTheDropBox: boolean = false;
  isPreviousStepButtonEnabled: boolean = true;
  isSubmitButtonEnabled: boolean = false;
  isLoadingComposantActive: boolean = false;
  isNewsCardCreatedSuccess: boolean = false;
  isNewsCardCreatedError: boolean = false;
  isNewsCardUpdatedSuccess: boolean = false;
  isNewsCardUpdatedError: boolean = false;

  constructor(
    private newsCardService: NewsCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {
    this.photosList = this.photoService.photosList;
  }

  onCheckInputCompleted() {
    console.log(this.newsCard.mainArticle.length, this.newsCard.readingTime);
    if (this.isCreateMod) {
      this.isSubmitButtonEnabled =
        this.newsCard.mainArticle.length > 5 &&
        this.newsCard.mainArticle.length < 1_000_000 &&
        this.newsCard.readingTime > 0;
    } else if (this.isUpdateMod) {
      this.newsCard;
      this.isSubmitButtonEnabled =
        this.newsCard.mainArticle.length > 5 &&
        this.newsCard.mainArticle.length < 1_000_000 &&
        this.newsCard.readingTime > 0;
    }
  }

  onGoStep1() {
    this.currentStep = 1;
    this.onGoToStep1.emit(1);
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    if (this.isUpdateMod) {
      this.updateCard();
    } else if (this.isCreateMod) {
      this.createCard();
    }
  }

  private createCard() {
    this.newsCardService
      .createCard(this.newsCard, this.adminMail)
      .subscribe((createdCard) => {
        if (this.photosList.length > 0) {
          this.uploadPhotosFromPhotoListAndCreateNewsCard(createdCard);
        }
      });
  }

  private updateCard() {
    this.newsCardService.updateCard(this.newsCard).subscribe(() => {
      if (this.photosList.length === 0) {
        this.isLoadingComposantActive = false;
        this.onNewsCardUpdatedFeedback();
      } else if (this.photosList.length > 0) {
        this.uploadPhotosFromPhotoListAndCreateNewsCard(this.newsCard);
      }
    });
  }

  private uploadPhotosFromPhotoListAndCreateNewsCard(createdCard: NewsCard) {
    for (let file of this.photoService.photosList) {
      const filePath = `news-card/${new Date().getTime()}_${file.name}.png`;
      const fileRef = this.storage.ref(filePath);

      const task = this.storage.upload(filePath, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              if (createdCard.id) {
                const newPicture: Picture = new Picture(url, createdCard);
                this.pictureService
                  .addPicture(newPicture)
                  .pipe(
                    catchError(() => {
                      if (this.isCreateMod) {
                        this.isLoadingComposantActive = false;
                        this.isNewsCardCreatedError = true;

                        setTimeout(() => {
                          this.isNewsCardCreatedError = false;
                        }, 3000);
                      } else if (this.isUpdateMod) {
                        this.isLoadingComposantActive = false;
                        this.isNewsCardUpdatedError = true;
                        setTimeout(() => {
                          this.isNewsCardUpdatedError = false;
                        }, 3000);
                      }
                      return of(null);
                    })
                  )
                  .subscribe(() => {
                    this.isLoadingComposantActive = false;
                    if (this.isCreateMod) {
                      this.onNewsCardCreatedFeedback();
                    } else if (this.isUpdateMod) {
                      this.onNewsCardUpdatedFeedback();
                    }
                  });
              }
            });
          })
        )
        .subscribe();
    }
  }

  private onNewsCardCreatedFeedback() {
    this.isNewsCardCreatedSuccess = true;
    setTimeout(() => {
      this.isNewsCardCreatedSuccess = false;
      // this.onCloseComponent(this.isCloseButtonActivated);
    }, 3000);
  }

  private onNewsCardUpdatedFeedback() {
    this.isNewsCardUpdatedSuccess = true;
    setTimeout(() => {
      this.isNewsCardUpdatedSuccess = false;
      // this.onCloseComponent(this.isCloseButtonActivated);
    }, 3000);
  }
}
