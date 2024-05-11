import { Component, Input } from '@angular/core';
import { PictureAuthorCard } from 'src/app/models/cards/picture-author-card.model';

@Component({
  selector: 'app-feat-picture-author-card',
  templateUrl: './feat-picture-author-card.component.html',
  styleUrls: ['./feat-picture-author-card.component.scss']
})
export class FeatPictureAuthorCardComponent {

  @Input() pictureAuthorCard!: PictureAuthorCard;

  elapsedTime: string = '';


  ngOnInit() {
    this.calculateElapsedTime();
  }


  private calculateElapsedTime() {
    const currentTime = new Date().getTime();
    const publishedTime = new Date(this.pictureAuthorCard.timestamp).getTime();
    const elapsedTimeInMilliseconds = currentTime - publishedTime;
    
    const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    this.showElapsedTime(
      seconds, 
      minutes, 
      hours, 
      days, 
      months, 
      years
      )
  }

  private showElapsedTime(
    seconds: number, 
    minutes: number, 
    hours: number, 
    days: number, 
    months: number, 
    years: number
    ) {
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
