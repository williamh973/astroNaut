import { Component, EventEmitter, Input, Output } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Picture } from 'src/app/models/images-for-cards/image-for-news-card.model';
import { PictureService } from 'src/app/shared/services/image-for-card/picture/picture.service';

@Component({
  selector: 'app-feat-edit-news-card-form',
  templateUrl: './feat-edit-news-card-form.component.html',
  styleUrls: ['./feat-edit-news-card-form.component.scss'],
})
export class FeatEditNewsCardFormComponent {
  @Input() newsCard!: NewsCard;
  @Input() userMail!: string;
  @Input() isCreateMod!: boolean;
  @Input() isUpdateMod!: boolean;
  @Input() isAdminMod!: boolean;
  @Output() isEditNewsCardFormOpen = new EventEmitter<boolean>();

  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isNewsCardCreatedSuccess: boolean = false;
  isNewsCardCreatedError: boolean = false;
  isNewsCardUpdatedSuccess: boolean = false;
  isNewsCardUpdatedError: boolean = false;
  isCloseButtonActivated: boolean = false;

  constructor(
    private newsCardService: NewsCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {
    this.photosList = this.photoService.photosList;
  }

  onCloseComponent(isCloseButtonActivated: boolean) {
    this.isCloseButtonActivated = isCloseButtonActivated;
    this.isEditNewsCardFormOpen.emit(false);
  }

  onHandlePhotoUpload(event: any) {
    this.isPhotoInTheBox = true;
    this.photoService.photosList.push(...event.addedFiles);
    if (
      this.photoService.photosList.length < 1 &&
      this.photoService.photosList.length > 1
    ) {
      this.isPhotoInTheBox = false;
    }
  }

  onRemovePhotoOfPhotoList(event: any) {
    const removedIndex = this.photosList.indexOf(event);
    if (removedIndex > -1) {
      this.photoService.photosList.splice(removedIndex, 1);
    }
  }

  onDeletePictureOfCardPicturesList(picture: Picture) {
    this.pictureService.deletePicture(picture.id!).subscribe(() => {
      const index = this.newsCard.picturesList.findIndex(
        (picture) => picture.id === picture.id
      );
      if (index !== -1) {
        this.newsCard.picturesList.splice(index, 1);
      }
    });
  }

  onInputTitleCompleted() {
    return (
      this.newsCard.title.length >= 5 && this.newsCard.title.length <= 150,
      this.newsCard.mainArticle.length >= 5 &&
        this.newsCard.mainArticle.length <= 1000,
      this.newsCard.readingTime
    );
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    if (this.isUpdateMod) {
      this.updateCard();
    } else if (this.isCreateMod) {
      this.createCard();
    }
  }

  private onNewsCardCreatedFeedback() {
    this.isNewsCardCreatedSuccess = true;
    setTimeout(() => {
      this.isNewsCardCreatedSuccess = false;
      this.onCloseComponent(this.isCloseButtonActivated);
    }, 3000);
  }

  private onNewsCardUpdatedFeedback() {
    this.isNewsCardUpdatedSuccess = true;
    setTimeout(() => {
      this.isNewsCardUpdatedSuccess = false;
      this.onCloseComponent(this.isCloseButtonActivated);
    }, 3000);
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

  private createCard() {
    this.newsCardService
      .createCard(this.newsCard, this.userMail)
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
}
