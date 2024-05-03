import { Component, Input } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';

@Component({
  selector: 'app-ui-carousel-nav',
  templateUrl: './ui-carousel-nav.component.html',
  styleUrls: ['./ui-carousel-nav.component.scss']
})
export class UiCarouselNavComponent {

  @Input() pictureOfWeekCard!: PictureOfWeekCard;

  pictureOfWeekCardImageSrc: string = '';
  currentIndex: number = 0;
  isLeftArrowVisible: boolean = false;
  isRightArrowVisible: boolean = false;

  ngOnInit() {
    this.nextImage();
    this.prevImage();
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

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % 
    this.pictureOfWeekCard.imageListForPictureOfWeek.length;
    this.pictureOfWeekCardImageSrc = this.pictureOfWeekCard.imageListForPictureOfWeek[this.currentIndex].src;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.pictureOfWeekCard.imageListForPictureOfWeek.length) % 
    this.pictureOfWeekCard.imageListForPictureOfWeek.length;
    this.pictureOfWeekCardImageSrc = this.pictureOfWeekCard.imageListForPictureOfWeek[this.currentIndex].src;
  }
}
