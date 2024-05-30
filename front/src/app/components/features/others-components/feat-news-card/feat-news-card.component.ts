import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardDisliked } from 'src/app/models/user/interaction/news-card/news-card-dislike.model';
import { NewsCardLiked } from 'src/app/models/user/interaction/news-card/news-card-like.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { NewsCardDislikedService } from 'src/app/shared/services/user/interaction/news-card/news-card-disliked.service';
import { NewsCardLikeService } from 'src/app/shared/services/user/interaction/news-card/news-card-like.service';

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
  currentUserNewsCardDislikedList: NewsCardDisliked[] = [];

  constructor(
    private router: Router,
    private newsCardService: NewsCardService,
    private newsCardLikeService: NewsCardLikeService,
    private newsCardDislikeService: NewsCardDislikedService
  ) {}

  ngOnInit() {
    this.newsCardFirstPictureInit();
    this.onGetCurrentUserNewsCardLikedList();
    this.onGetCurrentUserNewsCardDislikedList();
  }

  private newsCardFirstPictureInit() {
    if (this.newsCard.picturesList.length > 0) {
      this.newsCardPictureSrc = this.newsCard.picturesList[0].src;
    }
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

  private onAddNewsCardInNewsCardLikedList() {
    this.newsCardLikeService
      .addNewsCardLiked(this.newsCard.id!)
      .subscribe((success) => {
        this.newsCardService.updateCard(this.newsCard).subscribe(() => {
          this.onGetCurrentUserNewsCardLikedList();
        });
      });
  }

  private onGetCurrentUserNewsCardDislikedList() {
    this.newsCardDislikeService
      .getCurrentUserNewsCardDislikedList()
      .subscribe((newsCardDisliked: NewsCardDisliked[]) => {
        this.currentUserNewsCardDislikedList = newsCardDisliked;
        console.log(this.currentUserNewsCardDislikedList);

        this.isNewsCardDisliked = this.currentUserNewsCardDislikedList.some(
          (disliked) => disliked.newsCard.id === this.newsCard.id
        );
      });
  }

  private onAddNewsCardInNewsCardDislikedList() {
    this.newsCardDislikeService
      .addNewsCardDisliked(this.newsCard.id!)
      .subscribe((success) => {
        this.newsCardService.updateCard(this.newsCard).subscribe(() => {
          this.onGetCurrentUserNewsCardDislikedList();
        });
      });
  }

  private onDeleteNewsCardInCardLikedList() {
    const findNewsCardLiked = this.currentUserNewsCardLikedList.find(
      (newsCardLiked) => newsCardLiked.newsCard.id === this.newsCard.id
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

  private onDeleteNewsCardInCardDislikedList() {
    const findNewsCardDisliked = this.currentUserNewsCardDislikedList.find(
      (newsCardDisliked) => newsCardDisliked.newsCard.id === this.newsCard.id
    );
    if (findNewsCardDisliked) {
      this.newsCardDislikeService
        .deleteNewsCardDisliked(findNewsCardDisliked)
        .subscribe(
          (success) => {
            this.newsCardService.updateCard(this.newsCard).subscribe();
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  onOpenCardDetails() {
    this.router.navigate(['/news-card-details/', this.newsCard.id]);
  }

  onLikeThisCardToggle() {
    this.isNewsCardLiked = !this.isNewsCardLiked;
    if (this.isNewsCardLiked) {
      this.isNewsCardDisliked = false;
      this.newsCard.likeCount++;
      this.onAddNewsCardInNewsCardLikedList();

      if (this.newsCard.dislikeCount > 0) {
        this.newsCard.dislikeCount--;
        this.onDeleteNewsCardInCardDislikedList();
      }
    }
    if (!this.isNewsCardLiked) {
      this.newsCard.likeCount--;
      this.onDeleteNewsCardInCardLikedList();
    }
  }

  onDislikeThisCard() {
    this.isNewsCardDisliked = !this.isNewsCardDisliked;
    if (this.isNewsCardDisliked) {
      this.isNewsCardLiked = false;
      this.newsCard.dislikeCount++;
      this.onAddNewsCardInNewsCardDislikedList();

      if (this.newsCard.likeCount > 0) {
        this.newsCard.likeCount--;
        this.onDeleteNewsCardInCardLikedList();
      }
    }
    if (!this.isNewsCardDisliked) {
      this.newsCard.dislikeCount--;
      this.onDeleteNewsCardInCardDislikedList();
    }
  }
}
