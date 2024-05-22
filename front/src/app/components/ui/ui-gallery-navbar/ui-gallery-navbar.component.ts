import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';

@Component({
  selector: 'app-ui-gallery-navbar',
  templateUrl: './ui-gallery-navbar.component.html',
  styleUrls: ['./ui-gallery-navbar.component.scss']
})
export class UiGalleryNavbarComponent {

  
  galleryMenuItemList: Menu[] = [
    new Menu('Photos de la semaine', '/astronaut/gallery/pictures-of-the-week'),
    new Menu(`Thématiques`, ''),
    new Menu('Événements spéciaux', '/astronaut/gallery/pictures-of-special-events'),
    new Menu('Auteurs', '/astronaut/gallery/authors'),
    new Menu('Concours', '/astronaut/gallery/competition'),
    new Menu('Engins spatiaux', '/astronaut/gallery/spacecrafts'),
  ];

  @Output() isPictureWeekPageOpen = new EventEmitter<boolean>();

  isGalleryMenuAnimationWhenOpen: boolean = false;
  isThematicDropdownMenuOpen: boolean = false;
  selectedIndex: number = 0;

  constructor(
    private router: Router,
    private navbarService: NavbarService
    ) {}


ngOnInit() {
  this.selectedIndex = this.navbarService.onGetselectedIndex();
}

  onGalleryMenuItemClick(menuItem: Menu, index: number) {
    this.navbarService.onSetselectedIndex(index);
    menuItem.isSelected = true;

    switch (menuItem.label) {
      case 'Photos de la semaine':
        this.router.navigate(['/astronaut/gallery/pictures-of-the-week']);
        this.isPictureWeekPageOpen.emit(true);
        break;
        case 'Thématiques':
          break;
          case 'Événements spéciaux':
            this.router.navigate(['/astronaut/gallery/pictures-of-special-events']); 
            break;
            case 'Auteurs':
              this.router.navigate(['/astronaut/gallery/pictures-of-authors']);  
              break;
              case 'Concours':
                this.router.navigate(['/astronaut/gallery/competition']);
                break;
                case 'Engins spatiaux':
                  this.router.navigate(['/astronaut/gallery/spacecrafts']);
                  break;
        } 
    }
      
    onShowThematicDropdownMenu(menuItem: Menu) {
      if (menuItem.label === 'Thématiques') {
        this.isThematicDropdownMenuOpen = true;
      } else {
        this.isThematicDropdownMenuOpen = false;
      }
    }

  }