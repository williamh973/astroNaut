import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardLiked } from 'src/app/models/user/interaction/news-card-like.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { NewsCardLikeService } from 'src/app/shared/services/user/interaction/news-card-like.service';

@Component({
  selector: 'app-feat-news-card',
  templateUrl: './feat-news-card.component.html',
  styleUrls: ['./feat-news-card.component.scss'],
})
export class FeatNewsCardComponent {
  @Input() newsCard!: NewsCard;

  newsCardPictureSrc: string = '';
  isNewsCardDetailPageOpen: boolean = false;
  isNewsCardLiked: boolean = false;
  isNewsCardDisliked: boolean = false;
  currentUserNewsCardLikedList: NewsCardLiked[] = [];

  constructor(
    private router: Router,
    private newsCardService: NewsCardService,
    private newsCardLikeService: NewsCardLikeService
  ) {}

  ngOnInit() {
    this.newsCardFirstPictureInit();
    this.onGetCurrentUserNewsCardLikedList();
  }

  private onGetCurrentUserNewsCardLikedList() {
    this.newsCardLikeService
      .getCurrentUserNewsCardLikedList()
      .subscribe((newsCardLiked: NewsCardLiked[]) => {
        this.currentUserNewsCardLikedList = newsCardLiked;
        console.log(this.currentUserNewsCardLikedList);

        this.isNewsCardLiked = this.currentUserNewsCardLikedList.some(
          (liked) => liked.newsCard.id === this.newsCard.id
        );
      });
  }

  private newsCardFirstPictureInit() {
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
      this.onAddNewsCardInNewsCardLikedList();
    } else if (this.isNewsCardLiked && this.newsCard.dislikeCount > 0) {
      this.isNewsCardDisliked = false;
      this.newsCard.likeCount++;
      this.newsCard.dislikeCount--;
      this.onAddNewsCardInNewsCardLikedList();
    } else if (!this.isNewsCardLiked) {
      this.newsCard.likeCount--;
      this.onDeleteNewsCardInCardLikedList();
    }
  }

  onDislikeThisCard() {
    this.isNewsCardDisliked = !this.isNewsCardDisliked;

    if (this.isNewsCardDisliked && this.newsCard.likeCount === 0) {
      this.isNewsCardLiked = false;
      this.newsCard.dislikeCount++;
      this.newsCardService.updateCard(this.newsCard).subscribe();
    } else if (this.isNewsCardDisliked && this.newsCard.likeCount > 0) {
      this.isNewsCardLiked = false;
      this.newsCard.dislikeCount++;
      this.newsCard.likeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe();
    }

    if (!this.isNewsCardDisliked && this.newsCard.dislikeCount > 0) {
      this.newsCard.dislikeCount--;
      this.newsCardService.updateCard(this.newsCard).subscribe();
    }
  }

  private onAddNewsCardInNewsCardLikedList() {
    this.newsCardLikeService
      .addNewsCardLiked(this.newsCard.id!)
      .subscribe((success) => {
        this.newsCardService.updateCard(this.newsCard).subscribe(() => {
          this.onGetCurrentUserNewsCardLikedList();
        });
      });
  }

  private onDeleteNewsCardInCardLikedList() {
    const findNewsCardLiked = this.currentUserNewsCardLikedList.find(
      (liked) => liked.newsCard.id === this.newsCard.id
    );
    console.log(findNewsCardLiked);
    if (findNewsCardLiked) {
      this.newsCardLikeService.deleteNewsCardLiked(findNewsCardLiked).subscribe(
        (success) => {
          this.newsCardService.updateCard(this.newsCard).subscribe();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
