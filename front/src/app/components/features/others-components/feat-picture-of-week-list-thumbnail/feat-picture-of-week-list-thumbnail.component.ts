import { Component, Input } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';

@Component({
  selector: 'app-feat-picture-of-week-list-thumbnail',
  templateUrl: './feat-picture-of-week-list-thumbnail.component.html',
  styleUrls: ['./feat-picture-of-week-list-thumbnail.component.scss']
})
export class FeatPictureOfWeekListThumbnailComponent {

  @Input() pictureOfWeekCard!: PictureOfWeekCard;

  pictureOfWeekCardImageSrc: string = '';


  ngOnInit() {
    return this.pictureOfWeekCardImageSrc = this.pictureOfWeekCard.imageListForPictureOfWeek[0].src;
  }
}
