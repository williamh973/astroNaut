import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-social-medias',
  templateUrl: './ui-social-medias.component.html',
  styleUrls: ['./ui-social-medias.component.scss']
})
export class UiSocialMediasComponent {

  @Input() isAboutPageOpen!: boolean;
 

  ngOnInit() {
  //   if (this.isAboutPageOpen) {
      
  //   }
  }
}
