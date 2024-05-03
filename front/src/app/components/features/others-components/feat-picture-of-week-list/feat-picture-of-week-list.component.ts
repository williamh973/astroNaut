import { Component } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { PictureOfWeekCardService } from 'src/app/shared/services/picture-of-week-card.service';

@Component({
  selector: 'app-feat-picture-of-week-list',
  templateUrl: './feat-picture-of-week-list.component.html',
  styleUrls: ['./feat-picture-of-week-list.component.scss']
})
export class FeatPictureOfWeekListComponent {

  // pictureOfWeekCardList: PictureOfWeekCard[] = [];

  // constructor(private pictureOfWeekCardService: PictureOfWeekCardService) {}

  // ngOnInit() {
  //   this.onGetPictureOfWeekCardList();
  // }


  // onGetPictureOfWeekCardList() {
  //   this.pictureOfWeekCardService.getCardList().subscribe(
  //     (cardListFromDatabase: PictureOfWeekCard[]) => {
  //       this.pictureOfWeekCardList = cardListFromDatabase;
  //       // console.log(this.pictureOfWeekCardList);
        
  //       }
  //   );
  // }

}
