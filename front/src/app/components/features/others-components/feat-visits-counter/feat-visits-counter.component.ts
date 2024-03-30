import { Component } from '@angular/core';
import { VisitCounter } from 'src/app/models/visit-counter.model';
import { VisitCounterService } from 'src/app/shared/services/visit-counter.service';

@Component({
  selector: 'app-feat-visits-counter',
  templateUrl: './feat-visits-counter.component.html',
  styleUrls: ['./feat-visits-counter.component.scss']
})
export class FeatVisitsCounterComponent {

  visitCounter: VisitCounter = new VisitCounter(0);


  constructor(private visitCounterService: VisitCounterService) {}

  ngOnInit() {
    this.onIncreaseVisitCounter();
  }

  onIncreaseVisitCounter() {
    this.visitCounterService.onGetVisitCounter().subscribe((counter: VisitCounter[]) => {
      this.visitCounter = counter[0];
      this.visitCounter.number++;
      
      this.visitCounterService.onCreateVisitCounter(this.visitCounter).subscribe();
    });
  }

  
}