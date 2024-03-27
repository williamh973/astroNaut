import { Component } from '@angular/core';
import { NewsCard } from 'src/app/models/news-card.model';
import { newsCardService } from 'src/app/shared/services/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card-list',
  templateUrl: './feat-news-card-list.component.html',
  styleUrls: ['./feat-news-card-list.component.scss']
})
export class FeatNewsCardListComponent {

  cardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];

  constructor(private newsCardService: newsCardService) {}

  ngOnInit() {
    this.newsCardService.getCardList().subscribe(
      (cardListFromDatabase: NewsCard[]) => {
        this.cardList = cardListFromDatabase;
        console.log(this.cardList);
        }
    );
  }
}
