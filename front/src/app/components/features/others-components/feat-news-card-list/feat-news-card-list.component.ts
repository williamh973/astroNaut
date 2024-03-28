import { Component } from '@angular/core';
import { NewsCard } from 'src/app/models/news-card.model';
import { newsCardService } from 'src/app/shared/services/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card-list',
  templateUrl: './feat-news-card-list.component.html',
  styleUrls: ['./feat-news-card-list.component.scss']
})
export class FeatNewsCardListComponent {

  newsCardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];

  constructor(private newsCardService: newsCardService) {}

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


 