import { Component } from '@angular/core';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReviewComponent],
  template: '<app-review></app-review>'
})
export class AppComponent { }