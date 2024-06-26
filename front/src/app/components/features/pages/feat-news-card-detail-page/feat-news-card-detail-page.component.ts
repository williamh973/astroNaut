import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';
import { TokenService } from 'src/app/shared/services/token/token.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-feat-news-card-detail-page',
  templateUrl: './feat-news-card-detail-page.component.html',
  styleUrls: ['./feat-news-card-detail-page.component.scss'],
})
export class FeatNewsCardDetailPageComponent {
  newsCard!: NewsCard;
  newsCardPictureSrc: string = '';
  newsCardTitle: string = '';
  newsCardOptionnalOneArticle: string = '';
  newsCardOptionnalTwoArticle: string = '';
  currendUserMail: string = '';
  currentUserRole: string = '';
  newsCardTimestamp: Date = new Date();
  newsCardReadingTime!: number;
  newsCardId: number = 0;
  isCommentFormOpen: boolean = false;
  isQuitSvgActived: boolean = false;

  sanitizedMainArticle!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsCardService: NewsCardService,
    private tokenService: TokenService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.onGetNewsCardId();
    this.onExtractRoleFromToken();
  }

  onGetNewsCardId() {
    this.route.paramMap.subscribe((params: Params) => {
      this.newsCardId = +params['get']('id');

      this.newsCardService
        .getCardById(this.newsCardId)
        .subscribe((newsCard: NewsCard) => {
          this.newsCard = newsCard;
          (this.sanitizedMainArticle = this.sanitizer.bypassSecurityTrustHtml(
            this.newsCard.mainArticle
          )),
            this.onGetNewsCardPicture();
          this.onGetNewsCardTitle();
          this.onGetNewsCardReadingTime();
          this.onGetNewsCardTimestamp();
        });
    });
  }

  private onExtractRoleFromToken() {
    this.tokenService
      ._getTokenDetailsSubject$()
      .subscribe((decodedToken: any) => {
        if (decodedToken) {
          this.currentUserRole = decodedToken.role;
          this.currendUserMail = decodedToken.sub;
        }
      });
  }

  onGetNewsCardPicture() {
    if (this.newsCard.picturesList.length > 0) {
      this.newsCardPictureSrc = this.newsCard.picturesList[0].src;
    }
  }

  onGetNewsCardTitle() {
    this.newsCardTitle = this.newsCard.title;
  }

  onGetNewsCardReadingTime() {
    this.newsCardReadingTime = this.newsCard.readingTime;
  }

  onGetNewsCardTimestamp() {
    this.newsCardTimestamp = this.newsCard.timestamp;
  }

  onCloseDetailPage() {
    this.router.navigate(['astronaut/news/']);
  }

  onQuitSvgActive() {
    this.isQuitSvgActived = true;
  }

  onQuitSvgDasactived() {
    this.isQuitSvgActived = false;
  }
}
