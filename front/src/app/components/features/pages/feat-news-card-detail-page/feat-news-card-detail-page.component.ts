import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card-detail-page',
  templateUrl: './feat-news-card-detail-page.component.html',
  styleUrls: ['./feat-news-card-detail-page.component.scss']
})
export class FeatNewsCardDetailPageComponent {

  newsCard!: NewsCard;
  newsCardPictureSrc: string = '';
  newsCardTitle: string = '';
  newsCardReadingTime!: number;
  newsCardMainArticle: string = '';
  newsCardOptionnalOneArticle: string = '';
  newsCardOptionnalTwoArticle: string = '';
  newsCardOptionnalThreeArticle: string = '';
  newsCardTimestamp: Date = new Date();

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private newsCardService: NewsCardService
    ) {}

  ngOnInit() {
    this.onGetNewsCardId();
  }

  onGetNewsCardId() {
    this.route.paramMap.subscribe((params: Params) => {
      const cardId = +params['get']('id');

      this.newsCardService.getCardById(cardId).subscribe(
        (newsCard: NewsCard) => {
          this.newsCard = newsCard;
          this.onGetNewsCardPicture();
          this.onGetNewsCardTitle();
          this.onGetNewsCardArticles();
          this.onGetNewsCardReadingTime();
          this.onGetNewsCardTimestamp();
      });

    });

  }

  
  private onGetNewsCardPicture() {
    if (this.newsCard.picturesList.length > 0) {
        this.newsCardPictureSrc = this.newsCard.picturesList[0].src;
    }
  }

  private onGetNewsCardTitle() {
      this.newsCardTitle = this.newsCard.title;
  }

  private onGetNewsCardArticles() {
      this.newsCardMainArticle = this.newsCard.mainArticle;
      this.newsCardOptionnalOneArticle = this.newsCard.optionalArticleOne;
      this.newsCardOptionnalTwoArticle = this.newsCard.optionalArticleTwo;
      this.newsCardOptionnalThreeArticle = this.newsCard.optionalArticleThree;
  }

  private onGetNewsCardReadingTime() {
    this.newsCardReadingTime = this.newsCard.readingTime;
  }

  private onGetNewsCardTimestamp() {
      this.newsCardTimestamp = this.newsCard.timestamp;
  }

  onCloseDetailPage() {
    this.router.navigate(['/news/']);
  }
}
