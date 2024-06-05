import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { SharedLink } from 'src/app/models/shared-link.model';
import { NewsCardService } from 'src/app/shared/services/cards/news-card/news-card.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {
  isLeftMenuOpen: boolean = false;
  isLeftMenuAnimationWhenOpen: boolean = false;
  isLeftMenuItemsClickEnable: boolean = false;
  isAboutPageOpen: boolean = true;

  newsCardList: NewsCard[] = [];
  sharedLinkList: SharedLink[] = [
    new SharedLink(
      `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="40px" 
        viewBox="0 -960 960 960" 
        width="40px" 
        fill="#f000000"
      >
        <path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z"/>
      </svg>
      `,
      'https://example.com/share1',
      false
    ),
    new SharedLink(
      `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="40px" 
        viewBox="0 -960 960 960" 
        width="40px" 
        fill="#f000000"
      >
        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/>
      </svg>
      `,
      'http://localhost:4200/astronaut/about',
      false
    ),
  ];

  sanitizedSharedLinkList: {
    sharedLink: SharedLink;
    safeSvgIcon: SafeHtml;
  }[] = [];

  constructor(
    private sanitizer: DomSanitizer,
    private newsCardService: NewsCardService
  ) {}

  ngOnInit(): void {
    this.sanitizedSharedLinkList = this.sharedLinkList.map((sharedLink) => ({
      sharedLink,
      safeSvgIcon: this.sanitizer.bypassSecurityTrustHtml(sharedLink.svg),
    }));
    this.onGetNewsCardList();
  }

  onGetNewsCardList() {
    this.newsCardService
      .getCardListSubject$()
      .subscribe((cardListFromDatabase: NewsCard[]) => {
        this.newsCardList = cardListFromDatabase;
      });
  }

  onClickSharedLinkItem(sharedLink: SharedLink, index: number) {
    switch (sharedLink.link) {
      case 'https://example.com/share1':
        break;
      case 'http://localhost:4200/astronaut/about':
        this.copyCurrentPageLink();
        break;
      default:
        break;
    }
  }

  onOpenLeftMenu(isLeftMenuOpen: boolean) {
    this.isLeftMenuOpen = isLeftMenuOpen;
  }

  startMenuAnimation(isLeftMenuAnimationWhenOpen: boolean) {
    this.isLeftMenuAnimationWhenOpen = isLeftMenuAnimationWhenOpen;
  }

  leftMenuItemsClickEnable(isLeftMenuItemsClickEnable: boolean) {
    this.isLeftMenuItemsClickEnable = isLeftMenuItemsClickEnable;
  }

  onCloseLeftMenu(isLeftMenuOpen: boolean) {
    this.isLeftMenuOpen = isLeftMenuOpen;
  }

  copyCurrentPageLink() {
    const currentPageLink = window.location.href;
    navigator.clipboard
      .writeText(currentPageLink)
      .then(() => {
        alert("L'adresse de cette page a été copiée dans votre presse-papier.");
      })
      .catch((error) => {
        alert("une erreur s'est produite");
      });
  }
}
