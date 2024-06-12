import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardDisliked } from 'src/app/models/user/interaction/news-card/news-card-dislike.model';
import { NewsCardLiked } from 'src/app/models/user/interaction/news-card/news-card-like.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { NewsCardDislikedService } from 'src/app/shared/services/user/interaction/news-card/news-card-disliked.service';
import { NewsCardLikeService } from 'src/app/shared/services/user/interaction/news-card/news-card-like.service';

@Component({
  selector: 'app-feat-news-card',
  templateUrl: './feat-news-card.component.html',
  styleUrls: ['./feat-news-card.component.scss'],
})
export class FeatNewsCardComponent {
  @Input() newsCard!: NewsCard;
  @Input() isAdminMod!: boolean;

  newsCardPictureSrc: string = '';
  isNewsCardDetailPageOpen: boolean = false;
  isNewsCardLiked: boolean = false;
  isNewsCardDisliked: boolean = false;
  isUserNotConnectedError: boolean = false;
  isUpdateMod: boolean = false;
  isEditNewsCardFormOpen: boolean = false;
  currentUserNewsCardLikedList: NewsCardLiked[] = [];
  currentUserNewsCardDislikedList: NewsCardDisliked[] = [];

  constructor(
    private router: Router,
    private newsCardService: NewsCardService,
    private newsCardLikeService: NewsCardLikeService,
    private newsCardDislikeService: NewsCardDislikedService,
    private tokenService: TokenService
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
        this.isNewsCardLiked = this.currentUserNewsCardLikedList.some(
          (liked) => liked.newsCard.id === this.newsCard.id
        );
      });
  }

  private onGetCurrentUserNewsCardDislikedList() {
    this.newsCardDislikeService
      .getCurrentUserNewsCardDislikedList()
      .subscribe((newsCardDisliked: NewsCardDisliked[]) => {
        this.currentUserNewsCardDislikedList = newsCardDisliked;
        this.isNewsCardDisliked = this.currentUserNewsCardDislikedList.some(
          (disliked) => disliked.newsCard.id === this.newsCard.id
        );
      });
  }

  private onAddNewsCardInNewsCardLikedList(likeCount: number) {
    this.newsCardLikeService
      .addNewsCardLiked(this.newsCard.id!)
      .subscribe((success) => {
        this.newsCardService
          .updateCardLikeCount(this.newsCard, likeCount)
          .subscribe(() => {
            this.onGetCurrentUserNewsCardLikedList();
          });
      });
  }

  private onAddNewsCardInNewsCardDislikedList(dislikeCount: number) {
    this.newsCardDislikeService
      .addNewsCardDisliked(this.newsCard.id!)
      .subscribe((success) => {
        this.newsCardService
          .updateCardDislikeCount(this.newsCard, dislikeCount)
          .subscribe(() => {
            this.onGetCurrentUserNewsCardDislikedList();
          });
      });
  }

  onUpdateNewsCard() {
    this.isUpdateMod = true;
    this.isEditNewsCardFormOpen = !this.isEditNewsCardFormOpen;
  }

  onDeleteNewsCard() {
    const newsCardId = this.newsCard.id;
    if (newsCardId) {
      this.newsCardService.deleteCard(newsCardId).subscribe(
        (success) => {
          console.log(success);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  private onDeleteNewsCardInCardLikedList(likeCount: number) {
    const findNewsCardLiked = this.currentUserNewsCardLikedList.find(
      (newsCardLiked) => newsCardLiked.newsCard.id === this.newsCard.id
    );
    if (findNewsCardLiked) {
      this.newsCardLikeService.deleteNewsCardLiked(findNewsCardLiked).subscribe(
        (success) => {
          this.newsCardService
            .updateCardLikeCount(this.newsCard, likeCount)
            .subscribe();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  private onDeleteNewsCardInCardDislikedList(dislikeCount: number) {
    const findNewsCardDisliked = this.currentUserNewsCardDislikedList.find(
      (newsCardDisliked) => newsCardDisliked.newsCard.id === this.newsCard.id
    );
    if (findNewsCardDisliked) {
      this.newsCardDislikeService
        .deleteNewsCardDisliked(findNewsCardDisliked)
        .subscribe(
          (success) => {
            this.newsCardService
              .updateCardDislikeCount(this.newsCard, dislikeCount)
              .subscribe();
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  onLikeThisCardToggle() {
    const token = this.tokenService.isCheckTokenInLocalStorage();
    if (token) {
      this.isNewsCardLiked = !this.isNewsCardLiked;
      if (this.isNewsCardLiked) {
        this.isNewsCardDisliked = false;
        this.newsCard.likeCount++;
        this.onAddNewsCardInNewsCardLikedList(this.newsCard.likeCount);

        if (this.newsCard.dislikeCount > 0) {
          this.newsCard.dislikeCount--;
          this.onDeleteNewsCardInCardDislikedList(this.newsCard.dislikeCount);
        }
      }
      if (!this.isNewsCardLiked) {
        this.newsCard.likeCount--;
        this.onDeleteNewsCardInCardLikedList(this.newsCard.likeCount);
      }
    } else {
      this.isUserNotConnectedError = true;
      setTimeout(() => {
        this.isUserNotConnectedError = false;
      }, 2_000);
    }
  }

  onDislikeThisCardToggle() {
    const token = this.tokenService.isCheckTokenInLocalStorage();
    if (token) {
      this.isNewsCardDisliked = !this.isNewsCardDisliked;
      if (this.isNewsCardDisliked) {
        this.isNewsCardLiked = false;
        this.newsCard.dislikeCount++;
        this.onAddNewsCardInNewsCardDislikedList(this.newsCard.dislikeCount);

        if (this.newsCard.likeCount > 0) {
          this.newsCard.likeCount--;
          this.onDeleteNewsCardInCardLikedList(this.newsCard.likeCount);
        }
      }
      if (!this.isNewsCardDisliked) {
        this.newsCard.dislikeCount--;
        this.onDeleteNewsCardInCardDislikedList(this.newsCard.dislikeCount);
      }
    } else {
      this.isUserNotConnectedError = true;
      setTimeout(() => {
        this.isUserNotConnectedError = false;
      }, 2_000);
    }
  }

  onOpenCardDetails() {
    this.router.navigate(['/news-card-details/', this.newsCard.id]);
  }

  onCloseEditNewsCardForm(isEditNewsCardFormOpen: boolean) {
    this.isEditNewsCardFormOpen = isEditNewsCardFormOpen;
  }
}
