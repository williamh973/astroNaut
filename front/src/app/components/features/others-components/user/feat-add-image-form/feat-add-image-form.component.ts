import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, of } from 'rxjs';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { ImageForPictureOfWeekCard } from 'src/app/models/images-for-cards/image-for-picture-of-week-card.model';
import { ImageForPictureOfWeekCardService } from 'src/app/shared/services/image-for-picture-of-week-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { PictureOfWeekCardService } from 'src/app/shared/services/picture-of-week-card.service';

@Component({
  selector: 'app-feat-add-image-form',
  templateUrl: './feat-add-image-form.component.html',
  styleUrls: ['./feat-add-image-form.component.scss']
})
export class FeatAddImageFormComponent {

  pictureOfWeekCard: PictureOfWeekCard = new PictureOfWeekCard([], '', '', new Date());
  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isPictureOfWeekCardCreatedSuccess: boolean = false;
  isPictureOfWeekCardCreatedError: boolean = false;

  constructor(
    private pictureOfWeekCardService: PictureOfWeekCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private imageForPictureOfWeekCardService: ImageForPictureOfWeekCardService
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
      this.pictureOfWeekCard.title.length >= 5 && 
      this.pictureOfWeekCard.title.length <= 150,
      this.pictureOfWeekCard.resume.length >= 5 && 
      this.pictureOfWeekCard.resume.length <= 1000
      )
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.createCard();
  }

  private createCard() {
    this.pictureOfWeekCardService.createCard(this.pictureOfWeekCard)
    .subscribe((createdCard) => {
 
      for (let file of this.photoService.photosList) {
        const filePath = `picture-of-week-card/${new Date().getTime()}_${file.name}.png`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file);

        task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(
              (url) => {
                if (createdCard.id) {
                  const newPicture: ImageForPictureOfWeekCard = new ImageForPictureOfWeekCard(url, createdCard);
                  this.imageForPictureOfWeekCardService.createImage(newPicture).subscribe(
                   imageCreated => {
                    if (imageCreated) {
                      console.log('Résultats :', imageCreated);
                      this.isLoadingComposantActive = false;
                      this.isPictureOfWeekCardCreatedSuccess = true; 
                
                      setTimeout(() => {
                        this.isPictureOfWeekCardCreatedSuccess = false;
                      }, 3000);

                    } else {
                      (error: any) => { 
                        console.log(error);
                                       
                        this.isLoadingComposantActive = false;
                        this.isPictureOfWeekCardCreatedError = true;
                        setTimeout(() => {
                          this.isPictureOfWeekCardCreatedError = false;
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
