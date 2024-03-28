import { Component, EventEmitter, Output } from '@angular/core';
import { NewsCard } from 'src/app/models/news-card.model';
import { newsCardService } from 'src/app/shared/services/news-card/news-card.service';


@Component({
  selector: 'app-ui-search-bar-home',
  templateUrl: './ui-search-bar-home.component.html',
  styleUrls: ['./ui-search-bar-home.component.scss']
})
export class UiSearchBarHomeComponent {

  
  @Output() isSearchResultNotFoundChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  isSearchResultNotFound: boolean = false;
  newsCardList: NewsCard[] = [];
  filteredCardList: NewsCard[] = [];
  valueInSearchInput: string = "";

  
  constructor(private newsCardService: newsCardService) {}
  

  ngOnInit() {
    this.onGetNewsCardList();
  }

  
  private onGetNewsCardList() {
    this.newsCardService.getCardList().subscribe(
      (cardListFromDatabase: NewsCard[]) => {
        this.newsCardList = cardListFromDatabase;
        }
    );
  }
  
  
  private onSearchTermByIncludes() {
    this.filteredCardList = this.newsCardList.filter(
      (newsCard: NewsCard) => (
        newsCard.title.toLowerCase().includes(
          this.valueInSearchInput.toLowerCase()
          )
      ));

    this.isSearchResultNotFound = false;
    this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);
  
    this.onDisplaySearchResultNotFound();
  };
  
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

    this.newsCardService.postFilterCardList(this.filteredCardList); 
  };




  onDisplaySearchResultNotFound() {
      if (this.filteredCardList.length === 0) {
        this.isSearchResultNotFound = true;
        this.isSearchResultNotFoundChange.emit(this.isSearchResultNotFound);
      }
  };


}
