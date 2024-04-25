import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCard } from 'src/app/models/news-card.model';
import { NewsCardService } from 'src/app/shared/services/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card',
  templateUrl: './feat-news-card.component.html',
  styleUrls: ['./feat-news-card.component.scss']
})
export class FeatNewsCardComponent {

  @Input() newsCard!: NewsCard;

  isNewsCardDetailPageOpen: boolean = false;
  isNewsCardLiked: boolean = false;
  isNewsCardDisliked: boolean = false;
  newsCardPictureSrc: string = '';

  constructor(
    private router: Router,
    private newsCardService: NewsCardService
    ) {}

  ngOnInit() {
    if (this.newsCard.picturesList.length > 0) {
      this.newsCardPictureSrc = this.newsCard.picturesList[0].src;
    } 
  }
  
  onOpenCardDetails() {
    this.router.navigate(['/news-card-details/', this.newsCard.id]);
  }

  onLikeThisCard() {
    this.isNewsCardLiked = !this.isNewsCardLiked;
    
    if (this.isNewsCardLiked && this.newsCard.dislikeCount === 0) {
      this.isNewsCardDisliked = false;
      this.newsCard.likeCount++;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.isNewsCardLiked && this.newsCard.dislikeCount > 0) { 
      this.isNewsCardDisliked = false;
      this.newsCard.likeCount++;
      this.newsCard.dislikeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    }

    if (!this.isNewsCardLiked && this.newsCard.likeCount > 0) {
      this.newsCard.likeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    } 
  }
 
  onDislikeThisCard() {
    this.isNewsCardDisliked = !this.isNewsCardDisliked;

    if (this.isNewsCardDisliked && this.newsCard.likeCount === 0) {
      this.isNewsCardLiked = false;
      this.newsCard.dislikeCount++;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (this.isNewsCardDisliked && this.newsCard.likeCount > 0) { 
      this.isNewsCardLiked = false;
      this.newsCard.dislikeCount++;
      this.newsCard.likeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    } 

    if (!this.isNewsCardDisliked && this.newsCard.dislikeCount > 0) {
      this.newsCard.dislikeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe(
        () => {
          console.log("modifié avec succès");  
        },
        (error) => {
          console.log(error);
        }
      );
    } 
  }

}
