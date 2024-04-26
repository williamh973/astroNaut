import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu-model';

@Component({
  selector: 'app-ui-gallery-navbar',
  templateUrl: './ui-gallery-navbar.component.html',
  styleUrls: ['./ui-gallery-navbar.component.scss']
})
export class UiGalleryNavbarComponent {

  
  galleryMenuItemList: Menu[] = [
    new Menu('Photos de la semaine', '/astronaut/gallery/pictures-of-the-week'),
    new Menu(`Thématiques`, '/astronaut/gallery/thematic'),
    new Menu('Événements spéciaux', '/astronaut/gallery/pictures-of-special-events'),
    new Menu('Autheurs', '/astronaut/gallery/authors'),
    new Menu('Concours', '/astronaut/gallery/competition'),
    new Menu('Engins spatiaux', '/astronaut/gallery/spacecrafts'),
  ];


  constructor(private router: Router) {}


  onGalleryMenuItemClick(menuItem: Menu) {
      switch (menuItem.label) {
        case 'Photos de la semaine':
          this.router.navigate(['/astronaut/gallery/pictures-of-the-week']);
          break;
        case 'Thématiques':
          this.router.navigate(['/astronaut/gallery/thematic']);
          break;
        case 'Événements spéciaux':
          this.router.navigate(['/astronaut/gallery/pictures-of-special-events']);
          break;
        case 'Autheurs':
          this.router.navigate(['/astronaut/gallery/authors']);
          break;
        case 'Concours':
          this.router.navigate(['/astronaut/gallery/competition']);
          break;
        case 'Engins spatiaux':
          this.router.navigate(['/astronaut/gallery/spacecrafts']);
          break;
        }
    }
    
}

// case 'Nébuleuses':
//   this.router.navigate(['/pictures-of-nebulae']);
// break;
// case 'Galaxies':
//   this.router.navigate(['/pictures-of-galaxy']);
// break;
// case 'Aurores':
//   this.router.navigate(['/pictures-of-auroras']);
// break;