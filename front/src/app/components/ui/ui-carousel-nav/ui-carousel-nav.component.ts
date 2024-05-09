import { Component, Input } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';
import { PictureSpecialEventCard } from 'src/app/models/cards/picture-special-event-card.model';
import { PictureOfWeekCardService } from 'src/app/shared/services/picture-of-week-card.service';
import { PictureSpecialEventCardService } from 'src/app/shared/services/picture-special-event-card.service';

@Component({
  selector: 'app-ui-carousel-nav',
  templateUrl: './ui-carousel-nav.component.html',
  styleUrls: ['./ui-carousel-nav.component.scss']
})
export class UiCarouselNavComponent {

  @Input() pictureOfWeekCardList!: PictureOfWeekCard[];
  @Input() pictureSpecialEventCardList!: PictureSpecialEventCard[];
  @Input() isPictureOfWeekPageOpen!: boolean; 
  @Input() isPictureSpecialEventPageOpen!: boolean;

  currentIndex: number = 0;

  isLeftArrowVisible: boolean = false;
  isRightArrowVisible: boolean = false;


  ngOnInit() {
    console.log('isPictureOfWeekPageOpen', this.isPictureOfWeekPageOpen);
    console.log('isPictureSpecialEventPageOpen', this.isPictureSpecialEventPageOpen);
    
    this.nextCard();
    this.prevCard();
  }
 
  

  showLeftArrow() {
    this.isLeftArrowVisible = true;
  }

  hiddeLeftArrow() {
    this.isLeftArrowVisible = false;
  }

  showRightArrow() {
    this.isRightArrowVisible = true;
  }

  hiddeRightArrow() {
    this.isRightArrowVisible = false;
  }

  nextCard() {

    switch (this.isPictureOfWeekPageOpen) {
      case true:
        this.currentIndex = (this.currentIndex + 1) % this.pictureOfWeekCardList.length;    
        break;
        case false:
          break;
    }

    // if (this.isPictureOfWeekPageOpen) {
    //   this.currentIndex = (this.currentIndex + 1) % this.pictureOfWeekCardList.length;    
    // } else if (this.isPictureSpecialEventPageOpen) {
    //   this.currentIndex = (this.currentIndex + 1) % this.pictureSpecialEventCardList.length;
      
    // } {

    // }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 0;
    }
  }


}
