import { Component } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card-list',
  templateUrl: './feat-news-card-list.component.html',
  styleUrls: ['./feat-news-card-list.component.scss']
})
export class FeatNewsCardListComponent {

  newsCardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];

  constructor(private newsCardService: NewsCardService) {}

  ngOnInit() {
    this.onGetNewsCardList();
    this.onGetNewsCardListFiltered();
  }


  onGetNewsCardList() {
    this.newsCardService.getCardList().subscribe(
      (cardListFromDatabase: NewsCard[]) => {
        this.newsCardList = cardListFromDatabase;
        }
    );
  }

  onGetNewsCardListFiltered() {
    this.newsCardService.getFilteredCardList$().subscribe(
      (newsCardListFiltered: NewsCard[]) => {
        this.filteredCardList = newsCardListFiltered;
        }
    );
  }

}


 