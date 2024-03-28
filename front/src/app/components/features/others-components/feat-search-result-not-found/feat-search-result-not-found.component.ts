import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feat-search-result-not-found',
  templateUrl: './feat-search-result-not-found.component.html',
  styleUrls: ['./feat-search-result-not-found.component.scss']
})
export class FeatSearchResultNotFoundComponent {

  displayNotFoundMessage: string = "";
  
  ngOnInit() {
    this.displayNotFoundMessage = "Aucun résultat correspondant n'a été trouvé.";
  }

}
 