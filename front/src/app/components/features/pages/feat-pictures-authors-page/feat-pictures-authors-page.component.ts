import { Component } from '@angular/core';
import { PictureAuthorCard } from 'src/app/models/cards/picture-author-card.model';
import { PictureAuthorCardService } from 'src/app/shared/services/cards/picture-author-card/picture-author-card.service';

@Component({
  selector: 'app-feat-pictures-authors-page',
  templateUrl: './feat-pictures-authors-page.component.html',
  styleUrls: ['./feat-pictures-authors-page.component.scss'],
})
export class FeatPicturesAuthorsPageComponent {
  pictureAuthorCardList: PictureAuthorCard[] = [];
  isPictureAuthorPageOpen: boolean = true;

  constructor(private pictureAuthorCardService: PictureAuthorCardService) {}

  ngOnInit() {
    this.onGetPictureAuthorCardList();
  }

  onGetPictureAuthorCardList() {
    this.pictureAuthorCardService
      .getCardList()
      .subscribe((cardListFromDatabase: PictureAuthorCard[]) => {
        this.pictureAuthorCardList = cardListFromDatabase;
      });
  }
}
