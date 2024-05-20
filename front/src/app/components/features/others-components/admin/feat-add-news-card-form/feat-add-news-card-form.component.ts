import { Component } from '@angular/core';
import { Observable, finalize, forkJoin } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Picture } from 'src/app/models/images-for-cards/image-for-news-card.model';
import { PictureService } from 'src/app/shared/services/image-for-card/picture/picture.service';

@Component({
  selector: 'app-feat-add-news-card-form',
  templateUrl: './feat-add-news-card-form.component.html',
  styleUrls: ['./feat-add-news-card-form.component.scss']
}) 
export class FeatAddNewsCardFormComponent {

  newsCard: NewsCard = new NewsCard([], '', '', '', '', '', 0, new Date(), 0, 0, []);
  photosList: File[] = [];
  isPhotoInTheBox: boolean = false;
  isLoadingComposantActive: boolean = false;
  isNewsCardCreatedSuccess: boolean = false;
  isNewsCardCreatedError: boolean = false;


  constructor(
    private newsCardService: NewsCardService,
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
    return (
      this.newsCard.title.length >= 5 && 
      this.newsCard.title.length <= 150,
      this.newsCard.mainArticle.length >= 5 && 
      this.newsCard.mainArticle.length <= 1000,
      this.newsCard.readingTime
      )
  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.createCard();
  }


  private createCard() {
    this.newsCardService.createCard(this.newsCard)
    .subscribe((createdCard) => {
  
        for (let file of this.photoService.photosList) {
          const filePath = `news-card/${new Date().getTime()}_${file.name}.png`;
          const fileRef = this.storage.ref(filePath);

          const task = this.storage.upload(filePath, file);
          task.snapshotChanges().pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe(
                (url) => {
                  if (createdCard.id) {
                    const newPicture: Picture = new Picture(url, createdCard);
                    this.pictureService.addPicture(newPicture).subscribe(
                      (savedPicture) => {
                        this.isLoadingComposantActive = false;
                        this.isNewsCardCreatedSuccess = true; 
                  
                        setTimeout(() => {
                          this.isNewsCardCreatedSuccess = false;
                        }, 3000);
                      },
                      (error) => {
                        this.isLoadingComposantActive = false;
                        this.isNewsCardCreatedError = true;
                  
                        setTimeout(() => {
                          this.isNewsCardCreatedError = false;
                        }, 3000);
                      }
                    );
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
