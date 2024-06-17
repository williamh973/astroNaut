import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { Picture } from 'src/app/models/images-for-cards/image-for-news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { PictureService } from 'src/app/shared/services/image-for-card/picture/picture.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';

@Component({
  selector: 'app-feat-edit-news-card-form-step1',
  templateUrl: './feat-edit-news-card-form-step1.component.html',
  styleUrls: ['./feat-edit-news-card-form-step1.component.scss'],
})
export class FeatEditNewsCardFormStep1Component {
  @Input() currentStep!: number;
  @Input() newsCard!: NewsCard;
  @Input() isCreateMod!: boolean;
  @Input() isUpdateMod!: boolean;
  @Output() onGoToStep2: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCloseAllStepsFormEmit: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isCloseButtonActivated: boolean = false;
  isPhotoInTheDropBox: boolean = false;
  isSubmitButtonEnabled: boolean = false;
  isLoadingComposantActive: boolean = false;
  photosList: File[] = [];

  constructor(
    private newsCardService: NewsCardService,
    private photoService: PhotoService,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {
    this.photosList = this.photoService.photosList;
    console.log('isCreateMod', this.isCreateMod);
    console.log('isUpdateMod', this.isUpdateMod);
    if (this.isUpdateMod) {
      this.onCheckInputCompleted();
    }
  }

  onHandlePhotoUpload(event: any) {
    this.photoService.photosList.push(...event.addedFiles);
    this.isPhotoInTheDropBox = true;
    if (
      this.photoService.photosList.length < 1 &&
      this.photoService.photosList.length > 1
    ) {
      this.isPhotoInTheDropBox = false;
    }
    this.onCheckInputCompleted();
  }

  onRemovePhotoOfPhotoList(event: any) {
    const removedIndex = this.photosList.indexOf(event);
    if (removedIndex > -1) {
      this.photoService.photosList.splice(removedIndex, 1);
    }
  }

  onDeletePictureOfCardPicturesList(
    isCloseButtonActivated: boolean,
    picture: Picture
  ) {
    if (isCloseButtonActivated) {
      this.pictureService.deletePicture(picture.id!).subscribe(() => {
        const index = this.newsCard.picturesList.findIndex(
          (picture) => picture.id === picture.id
        );
        if (index !== -1) {
          this.newsCard.picturesList.splice(index, 1);
        }
      });
    }
  }

  onCheckInputCompleted() {
    if (this.isCreateMod) {
      this.isSubmitButtonEnabled =
        this.isPhotoInTheDropBox &&
        this.newsCard.title.length > 1 &&
        this.newsCard.title.length < 150;
      console.log('isPhotoInTheDropBox', this.isPhotoInTheDropBox);
      console.log('newsCard.title.length', this.newsCard.title.length);
    } else if (this.isUpdateMod) {
      console.log(this.newsCard.picturesList.length, this.isPhotoInTheDropBox);
      this.isSubmitButtonEnabled =
        this.newsCard.title.length > 1 && this.newsCard.title.length < 150;
    }
  }

  onNextStep() {
    if (this.isCreateMod) {
      this.onGoToStep2.emit(2);
    } else if (this.isUpdateMod) {
      this.isLoadingComposantActive = true;
      this.newsCardService
        .updateCard(this.newsCard)
        .subscribe((updatedCard: NewsCard) => {
          if (updatedCard) {
            this.isLoadingComposantActive = false;
            this.onGoToStep2.emit(2);
          }
        });
    }
  }
}
