import { Component, Input } from '@angular/core';
import { PictureOfWeekCard } from 'src/app/models/cards/picture-of-week-card.model';

@Component({
  selector: 'app-feat-picture-of-week-card',
  templateUrl: './feat-picture-of-week-card.component.html',
  styleUrls: ['./feat-picture-of-week-card.component.scss']
})
export class FeatPictureOfWeekCardComponent {

  @Input() pictureOfWeekCard!: PictureOfWeekCard;

  elapsedTime: string = '';


  ngOnInit() {
    this.calculateElapsedTime();
  }

  private calculateElapsedTime() {
    const currentTime = new Date().getTime();
    const publishedTime = new Date(this.pictureOfWeekCard.timestamp).getTime();
    const elapsedTimeInMilliseconds = currentTime - publishedTime;
    
    const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    
    if (years > 0) {
      this.elapsedTime = years + ' ans';
    } else if (months > 0) {
      this.elapsedTime = months + ' mois';
    } else if (days > 0) {
      this.elapsedTime = days + ' jours';
    } else if (hours > 0) {
      this.elapsedTime = hours + ' heures';
    } else if (minutes > 0) {
      this.elapsedTime = minutes + ' minutes';
    } else {
      this.elapsedTime = seconds + ' secondes';
    }
  }

}
