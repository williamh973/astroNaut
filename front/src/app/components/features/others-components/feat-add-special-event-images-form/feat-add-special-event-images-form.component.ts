import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, of } from 'rxjs';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';
import { ImageForPictureSpecialEventCard } from 'src/app/models/images-for-cards/image-for-picture-special-event.model';
import { ImageForPictureSpecialEventCardService } from 'src/app/shared/services/image-for-card/image-for-special-event-card/image-for-picture-special-event-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { PictureSpecialEventCardService } from 'src/app/shared/services/cards/picture-special-event-card/picture-special-event-card.service';

@Component({
  selector: 'app-feat-add-special-event-images-form',
  templateUrl: './feat-add-special-event-images-form.component.html',
  styleUrls: ['./feat-add-special-event-images-form.component.scss']
})
export class FeatAddSpecialEventImagesFormComponent {

  pictureSpecialEventCard: PictureSpecialEventCard = new PictureSpecialEventCard([], '', '', new Date());
  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isPictureSpecialEventCardCreatedSuccess: boolean = false;
  isPictureSpecialEventCardCreatedError: boolean = false;

  constructor(
    private pictureSpecialEventCardService: PictureSpecialEventCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private imageForPictureSpecialEventCardService: ImageForPictureSpecialEventCardService
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
      this.pictureSpecialEventCard.title.length >= 5 && 
      this.pictureSpecialEventCard.title.length <= 150
      )
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.createCard();
  }

  private createCard() {
    this.pictureSpecialEventCardService.createCard(this.pictureSpecialEventCard)
    .subscribe((createdCard) => {
 
      for (let file of this.photoService.photosList) {
        const filePath = `picture-special-event/${new Date().getTime()}_${file.name}.png`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);

        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(
              (url) => {
                if (createdCard.id) {
                  const newPicture: ImageForPictureSpecialEventCard = new ImageForPictureSpecialEventCard(url, createdCard);
                  this.imageForPictureSpecialEventCardService.createImage(newPicture).subscribe(
                   imageCreated => {
                    if (imageCreated) {
                      console.log('Résultats :', imageCreated);
                      this.isLoadingComposantActive = false;
                      this.isPictureSpecialEventCardCreatedSuccess = true; 
                
                      setTimeout(() => {
                        this.isPictureSpecialEventCardCreatedSuccess = false;
                      }, 3000);

                    } else {
                      (error: any) => { 
                        console.log(error);
                                       
                        this.isLoadingComposantActive = false;
                        this.isPictureSpecialEventCardCreatedError = true;
                        setTimeout(() => {
                          this.isPictureSpecialEventCardCreatedError = false;
                        }, 3000);
                        return of(null);
                      }
                    }
                   }
                  );
                } else {
                  
                }
              }
            );
          })
        ).subscribe();
      }
    }
  );

}

}

