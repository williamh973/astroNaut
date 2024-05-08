import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
    new Menu(`Thématiques`, ''),
    new Menu('Événements spéciaux', '/astronaut/gallery/pictures-of-special-events'),
    new Menu('Autheurs', '/astronaut/gallery/authors'),
    new Menu('Concours', '/astronaut/gallery/competition'),
    new Menu('Engins spatiaux', '/astronaut/gallery/spacecrafts'),
  ];

  @Output() isPictureWeekPageOpen = new EventEmitter<boolean>();

  isGalleryMenuAnimationWhenOpen: boolean = false;
  selectedIndex: number = 0;
  isThematicDropdownMenuOpen: boolean = false;

  constructor(private router: Router) {}


  onGalleryMenuItemClick(menuItem: Menu, index: number) {
    this.selectedIndex = index;
    this.onShowThematicDropdownMenu();

    
      switch (menuItem.label) {
        case 'Photos de la semaine':
          this.router.navigate(['/astronaut/gallery/pictures-of-the-week']);
          console.log(this.selectedIndex);
          
          this.isPictureWeekPageOpen.emit(true);
          break;
        case 'Thématiques':
          break;
          case 'Événements spéciaux':
            this.router.navigate(['/astronaut/gallery/pictures-of-special-events']); 
            console.log(this.selectedIndex);
            break;
            case 'Autheurs':
              this.router.navigate(['/astronaut/gallery/pictures-of-authors']);
              console.log(this.selectedIndex);
          break;
        case 'Concours':
          this.router.navigate(['/astronaut/gallery/competition']);
          break;
        case 'Engins spatiaux':
          this.router.navigate(['/astronaut/gallery/spacecrafts']);
          break;
        } 
    }
      
    onShowThematicDropdownMenu() {
      if (this.selectedIndex === 1) {
        this.isThematicDropdownMenuOpen = true;
      } else if (this.selectedIndex !== 1) {
        this.isThematicDropdownMenuOpen = false;
      }
    }

  }