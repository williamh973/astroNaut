import { Component } from '@angular/core';

@Component({
  selector: 'app-feat-to-contribute-page',
  templateUrl: './feat-to-contribute-page.component.html',
  styleUrls: ['./feat-to-contribute-page.component.scss']
})
export class FeatToContributePageComponent {

  isAddImageFormOpen: boolean = false;
  isAddLocationFormOpen: boolean = false;
  
  
  onOpenAddImageForm() {
    this.isAddImageFormOpen = !this.isAddImageFormOpen; 
    this.isAddLocationFormOpen = false;
  }
  
  onOpenAddLocationForm() {
    this.isAddLocationFormOpen = !this.isAddLocationFormOpen;
    this.isAddImageFormOpen = false;
  }
}
