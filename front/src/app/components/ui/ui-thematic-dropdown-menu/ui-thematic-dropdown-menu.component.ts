import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-ui-thematic-dropdown-menu',
  templateUrl: './ui-thematic-dropdown-menu.component.html',
  styleUrls: ['./ui-thematic-dropdown-menu.component.scss']
})
export class UiThematicDropdownMenuComponent {

  thematicMenuItemList: Menu[] = [
    new Menu('Galaxies', '/astronaut/gallery/pictures-of-galaxy'),
    new Menu(`Notre système solaire`, 'pictures-of-solar-system'),
    new Menu('Nébuleuses', '/astronaut/gallery/pictures-of-nebulae'),
    new Menu('Aurores', '/astronaut/gallery/pictures-of-auroras'),
  ];

  isThematicDropdownMenuOpen: boolean = false;
  isOurSolarSystemDropdownMenuOpen: boolean = false;
  selectedIndex: number = 0;


  constructor(private router: Router) {}


    onThematicMenuItemClick(menuItem: Menu, index: number) {
      this.selectedIndex = index;
        switch (menuItem.label) {
          case 'Galaxies':
            this.router.navigate(['/astronaut/gallery/pictures-of-galaxy']);
            break;
            case 'Notre système solaire':
              break;
              case 'Nébuleuses':
                this.router.navigate(['/pictures-of-nebulae']);
                break;
                case 'Aurores':
                  this.router.navigate(['/pictures-of-auroras']);
                  break;
        } 
    }

    onShowOurSolarSystemDropdownMenu(menuItem: Menu) {
      if (menuItem.label === 'Notre système solaire') {
        this.isOurSolarSystemDropdownMenuOpen = true;
      } else {
        this.isOurSolarSystemDropdownMenuOpen = false;
      }
    }
    
  }
