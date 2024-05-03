import { Component, Input } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';

@Component({
  selector: 'app-ui-carousel-nav',
  templateUrl: './ui-carousel-nav.component.html',
  styleUrls: ['./ui-carousel-nav.component.scss']
})
export class UiCarouselNavComponent {

  @Input() pictureOfWeekCardList!: PictureOfWeekCard[];

  currentIndex: number = 0;
  isLeftArrowVisible: boolean = false;
  isRightArrowVisible: boolean = false;

  ngOnInit() {
    this.nextCard();
    this.prevCard();
    console.log(this.pictureOfWeekCardList);
    
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
    this.currentIndex = (this.currentIndex + 1) % this.pictureOfWeekCardList.length;
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = 0;
    }
  }


}
