import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';

@Component({
  selector: 'app-feat-news-card-list',
  templateUrl: './feat-news-card-list.component.html',
  styleUrls: ['./feat-news-card-list.component.scss'],
})
export class FeatNewsCardListComponent {
  @Input() isAdminMod!: boolean;
  newsCardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];

  private newsCardSubscription!: Subscription;

  constructor(private newsCardService: NewsCardService) {}

  ngOnInit() {
    this.onGetNewsCardList();
    this.onGetNewsCardListFiltered();
  }

  ngOnDestroy() {
    if (this.newsCardSubscription) {
      this.newsCardSubscription.unsubscribe();
    }
  }

  onGetNewsCardList() {
    this.newsCardSubscription = this.newsCardService
      .getCardListSubject$()
      .subscribe((cardListFromDatabase: NewsCard[]) => {
        this.newsCardList = cardListFromDatabase.sort(
          (newsCardA, newsCardB) => {
            const timestampA = new Date(newsCardA.timestamp ?? new Date(0));
            const timestampB = new Date(newsCardB.timestamp ?? new Date(0));
            return timestampB.getTime() - timestampA.getTime();
          }
        );
      });
  }

  onGetNewsCardListFiltered() {
    this.newsCardService
      .getFilteredCardList$()
      .subscribe((newsCardListFiltered: NewsCard[]) => {
        this.filteredCardList = newsCardListFiltered;
      });
  }
}
