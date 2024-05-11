import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { PictureAuthorCard } from 'src/app/models/cards/picture-author-card.model';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';
import { ImageForPictureAuthorCard } from 'src/app/models/images-for-cards/image-for-picture-author.model';
import { ImageForPictureSpecialEventCard } from 'src/app/models/images-for-cards/image-for-picture-special-event.model';
import { ImageForPictureAuthorCardService } from 'src/app/shared/services/image-for-picture-author-card.service';
import { ImageForPictureSpecialEventCardService } from 'src/app/shared/services/image-for-picture-special-event-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { PictureAuthorCardService } from 'src/app/shared/services/picture-author-card.service';
import { PictureSpecialEventCardService } from 'src/app/shared/services/picture-special-event-card.service';

@Component({
  selector: 'app-feat-add-image-form',
  templateUrl: './feat-add-image-form.component.html',
  styleUrls: ['./feat-add-image-form.component.scss']
})
export class FeatAddImageFormComponent {

  @Output() isAddImageFormOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  pictureSpecialEventCard: PictureSpecialEventCard = new PictureSpecialEventCard([], '', '', new Date());
  pictureAuthorCard: PictureAuthorCard = new PictureAuthorCard([], '', '', new Date());
  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isPictureSpecialEventCardCreatedSuccess: boolean = false;
  isPictureSpecialEventCardCreatedError: boolean = false;
  isPictureAuthorCardCreatedSuccess: boolean = false;
  isPictureAuthorCardCreatedError: boolean = false;
  categoryOfPictureCard: string = "";
  cardResume: string = "";
  cardTitle: string = "";


  constructor(
    private pictureSpecialEventCardService: PictureSpecialEventCardService,
    private pictureAuthorCardService: PictureAuthorCardService,
    private imageForPictureSpecialEventCardService: ImageForPictureSpecialEventCardService,
    private imageForPictureAuthorCardService: ImageForPictureAuthorCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage
    ) {}

  ngOnInit(): void {
    this.photosList = this.photoService.photosList;   
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

  onInputTitleCompleted() {
    return (
      this.cardTitle.length >= 5 && 
      this.cardTitle.length <= 150,
      this.cardResume.length >= 5 && 
      this.cardResume.length <= 1000
      )
  }

  private createCardAndImages(
    card: any, 
    cardService: any, 
    imageService: any, 
    directoryName: string, 
    category: string
    ) {
    card.title = this.cardTitle;
    card.resume = this.cardResume;

    cardService.createCard(card).subscribe((createdCard: any) => {
      for (let file of this.photoService.photosList) {
        const filePath = `${directoryName}/${new Date().getTime()}_${file.name}.png`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);
  
        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(
              (url) => {
                if (createdCard.id) {
                  let imageForCardCreated: any;
                  if (category === "special-events") {
                    imageForCardCreated = new ImageForPictureSpecialEventCard(url, createdCard);
                  } else if (category === "author") {
                    imageForCardCreated = new ImageForPictureAuthorCard(url, createdCard);
                  }
                  imageService.createImage(imageForCardCreated).subscribe(
                    (imageCreated: any) => {
                      if (imageCreated) {
                        this.isLoadingComposantActive = false;
                        this.imageCreationSuccess(category);
                      } else {
                          this.isLoadingComposantActive = false;
                          this.imageCreationError(category);
                      }
                    },
                  );
                }
              },
            );
          })
        ).subscribe();
      }
    });
  }

  private imageCreationSuccess(category: string) {
    this.isLoadingComposantActive = false;
    if (category === "special-events") {
      this.isPictureSpecialEventCardCreatedSuccess = true;
    } else if (category === "author") {
      this.isPictureAuthorCardCreatedSuccess = true;
    }
  
    setTimeout(() => {
      if (category === "special-events") {
        this.isPictureSpecialEventCardCreatedSuccess = false;
      } else if (category === "author") {
        this.isPictureAuthorCardCreatedSuccess = false;
      }
      this.isAddImageFormOpen.emit(false);
      this.cardTitle = "";
      this.cardResume = "";
    }, 3000);
  }

  private imageCreationError(category: string) {
    this.isLoadingComposantActive = false;
    if (category === "special-events") {
      this.isPictureSpecialEventCardCreatedError = true;
    } else if (category === "author") {
      this.isPictureAuthorCardCreatedError = true;
    }

    setTimeout(() => {
      if (category === "special-events") {
        this.isPictureSpecialEventCardCreatedError = false;
      } else if (category === "author") {
        this.isPictureAuthorCardCreatedError = false;
      }
    }, 3000);
  }
  
  onSubmit() {
    this.isLoadingComposantActive = true;

    switch (this.categoryOfPictureCard) {
      case "special-events":
        this.createCardAndImages(
          this.pictureSpecialEventCard, 
          this.pictureSpecialEventCardService, 
          this.imageForPictureSpecialEventCardService, 
          "picture-special-events",
          "special-events"
          );
        break;
      case "author":
        this.createCardAndImages(
          this.pictureAuthorCard, 
          this.pictureAuthorCardService, 
          this.imageForPictureAuthorCardService, 
          "picture-authors",
          "author"
          );
        break;

      default:
        console.error("Une erreur est survenu");
    }
  }
}