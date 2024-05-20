import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _selectedIndex: number = 0;

  onGetselectedIndex(): number {
    return this._selectedIndex;
  }

  onSetselectedIndex(index: number) {
    this._selectedIndex = index;
  }


}
