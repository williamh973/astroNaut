import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-home-page',
  templateUrl: './feat-home-page.component.html',
  styleUrls: ['./feat-home-page.component.scss']
})
export class FeatHomePageComponent {
  
  isSearchResultNotFound: boolean = false;
  displayNotFoundMessage!: string;
  // isLoginOrRegisterPopupOpen: boolean = false;

  constructor() {}


  ngOnInit() {
   
   }

  onSearchResultChange(isSearchResultNotFound: boolean): void {
    this.isSearchResultNotFound = isSearchResultNotFound;
  }

  onNotFoundMessageResultChange(displayNotFoundMessage: string): void {
    this.displayNotFoundMessage = displayNotFoundMessage;
    console.log(this.displayNotFoundMessage);
  }
 


}
