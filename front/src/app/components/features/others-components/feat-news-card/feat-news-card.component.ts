import { Component, Input } from '@angular/core';
import { NewsCard } from 'src/app/models/news-card.model';

@Component({
  selector: 'app-feat-news-card',
  templateUrl: './feat-news-card.component.html',
  styleUrls: ['./feat-news-card.component.scss']
})
export class FeatNewsCardComponent {

  @Input() newsCard!: NewsCard;

  newsCardPictureSrc: string = '';

ngOnInit() {
  if (this.newsCard.picturesList.length > 0) {
    this.newsCardPictureSrc = this.newsCard.picturesList[0].src;
  }
}
}
