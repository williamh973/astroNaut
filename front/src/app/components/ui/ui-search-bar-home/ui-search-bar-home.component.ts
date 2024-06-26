import { Component, EventEmitter, Output } from '@angular/core';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';

@Component({
  selector: 'app-ui-search-bar-home',
  templateUrl: './ui-search-bar-home.component.html',
  styleUrls: ['./ui-search-bar-home.component.scss'],
})
export class UiSearchBarHomeComponent {
  @Output() isSearchResultNotFoundChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isSearchResultNotFound: boolean = false;
  newsCardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];
  valueInSearchInput: string = '';

  constructor(private newsCardService: NewsCardService) {}

  ngOnInit() {
    this.onGetNewsCardList();
  }

  private onGetNewsCardList() {
    this.newsCardService
      .getCardListSubject$()
      .subscribe((cardListFromDatabase: NewsCard[]) => {
        this.newsCardList = cardListFromDatabase;
      });
  }

  private onSearchTermByIncludes() {
    this.filteredCardList = this.newsCardList.filter((newsCard: NewsCard) =>
      newsCard.title
        .toLowerCase()
        .includes(this.valueInSearchInput.toLowerCase())
    );

    this.isSearchResultNotFound = false;
    this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);

    this.onDisplaySearchResultNotFound();
  }

  handleClick() {
    this.filteredCardList = [];
    this.valueInSearchInput = '';
  }

  handleKeydown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();
    if (/^[a-z]$/.test(key)) {
      this.onSearchNewsCard();
    }
  }

  onSearchNewsCard() {
    if (this.valueInSearchInput) {
      this.onSearchTermByIncludes();
    } else {
      this.filteredCardList = [...this.newsCardList];
    }

    this.newsCardService.postFilterCardListForSearch(this.filteredCardList);
  }

  onDisplaySearchResultNotFound() {
    if (this.filteredCardList.length === 0) {
      this.isSearchResultNotFound = true;
      this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);
    }
  }
}
