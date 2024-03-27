import { Component } from '@angular/core';
import { Observable, finalize, forkJoin } from 'rxjs';
import { NewsCard } from 'src/app/models/news-card.model';
import { newsCardService } from 'src/app/shared/services/news-card/news-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Picture } from 'src/app/models/picture.model';
import { PictureService } from 'src/app/shared/services/picture/picture.service';

@Component({
  selector: 'app-feat-add-news-card-form',
  templateUrl: './feat-add-news-card-form.component.html',
  styleUrls: ['./feat-add-news-card-form.component.scss']
})
export class FeatAddNewsCardFormComponent {

  newsCard: NewsCard = new NewsCard([], '', new Date());
  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isNewsCardCreatedSuccess: boolean = false;
  isNewsCardCreatedError: boolean = false;


  constructor(
    private newsCardService: newsCardService,
    private photoService: PhotoService,
    private storage: AngularFireStorage,
    private pictureService: PictureService
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
    return this.newsCard.title.length >= 5 && this.newsCard.title.length <= 150;
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.createCard();
  }


  private createCard() {
    this.newsCardService.createCard(this.newsCard)
    .subscribe((createdCard) => {
      const uploadObservableList: Observable<Picture | null>[] = [];
  
      for (let file of this.photoService.photosList) {
        const filePath = `news-card/${new Date().getTime()}_${file.name}.png`;
        const fileRef = this.storage.ref(filePath);

        const uploadObservable = new Observable<Picture | null>(
          (observer) => {
          const task = this.storage.upload(filePath, file);
          task.snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(
                (url) => {
                  if (createdCard.id) {
                    const newPicture: Picture = new Picture(url, createdCard);
                    this.pictureService.addPicture(newPicture).subscribe(
                      (savedPicture) => {
                        observer.next(savedPicture);
                        observer.complete();
                      },
                      (error) => {
                        observer.next(null);
                        observer.complete();
                      }
                    );
                  } else {
                    observer.next(null);
                    observer.complete();
                  }
                }
              );
            })
          ).subscribe();
        });
        uploadObservableList.push(uploadObservable);
      }

      this.onUploadResults(uploadObservableList)
    }
  );

}

private onUploadResults(uploadObservableList: any) {
  forkJoin(uploadObservableList).subscribe(
    (results) => {
      console.log('Résultats :', results);
      this.isLoadingComposantActive = false;
      this.isNewsCardCreatedSuccess = true; 

      setTimeout(() => {
        this.isNewsCardCreatedSuccess = false;
      }, 3000);
    },
    (error) => {
      console.error('Résultats :', error);
      this.isLoadingComposantActive = false;
      this.isNewsCardCreatedError = true;

      setTimeout(() => {
        this.isNewsCardCreatedError = false;
      }, 3000);
    }
  );
}

}
