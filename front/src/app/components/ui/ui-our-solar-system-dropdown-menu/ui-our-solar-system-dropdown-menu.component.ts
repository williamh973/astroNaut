import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu-model';

@Component({
  selector: 'app-ui-our-solar-system-dropdown-menu',
  templateUrl: './ui-our-solar-system-dropdown-menu.component.html',
  styleUrls: ['./ui-our-solar-system-dropdown-menu.component.scss']
})
export class UiOurSolarSystemDropdownMenuComponent {


  ourSolarSystemMenuItemList: Menu[] = [
    new Menu('Mercure', '/astronaut/gallery/pictures-of-mercury'),
    new Menu(`Venus`, '/astronaut/gallery/pictures-of-venus'),
    new Menu('Mars', '/astronaut/gallery/pictures-of-mars'),
    new Menu('Terre', '/astronaut/gallery/pictures-of-earth'),
    new Menu('Jupiter', '/astronaut/gallery/pictures-of-jupiter'),
    new Menu('Saturne', '/astronaut/gallery/pictures-of-saturn'),
    new Menu('Uranus', '/astronaut/gallery/pictures-of-uranus'),
    new Menu('Neptune', '/astronaut/gallery/pictures-of-neptun'),
    new Menu('Pluton', '/astronaut/gallery/pictures-of-pluto'),
  ];

  isOurSolarSystemDropdownMenuOpen: boolean = false;
  selectedIndex: number = 0;

  constructor(private router: Router) {}


    onOurSolarSystemMenuItemClick(menuItem: Menu, index: number) {
      this.selectedIndex = index;
        switch (menuItem.label) {
          case 'Mercure':
            this.router.navigate(['/astronaut/gallery/pictures-of-mercury']);
            break;
            case 'Venus':
              this.router.navigate(['/astronaut/gallery/pictures-of-venus']);
              break;
              case 'Mars':
                this.router.navigate(['/astronaut/gallery/pictures-of-mars']);
                break;
                case 'Terre':
                  this.router.navigate(['/astronaut/gallery/pictures-of-earth']);
                  break;
                  case 'Jupiter':
                    this.router.navigate(['/astronaut/gallery/pictures-of-jupiter']);
                    break;
                    case 'Saturne':
                      this.router.navigate(['/astronaut/gallery/pictures-of-saturn']);
                      break;
                      case 'Uranus':
                        this.router.navigate(['/astronaut/gallery/pictures-of-uranus']);
                        break;
                        case 'Neptune':
                          this.router.navigate(['/astronaut/gallery/pictures-of-neptun']);
                          break;
                          case 'Pluton':
                            this.router.navigate(['/astronaut/gallery/pictures-of-pluto']);
                            break;
        } 
    }
    

}
