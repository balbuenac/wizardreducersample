import { Component, OnInit } from '@angular/core';

// Reducer dependencies
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../domain/app.state'

@Component({
  selector: 'app-review-step',
  templateUrl: './review-step.component.html',
  styleUrls: ['./review-step.component.css']
})
export class ReviewStepComponent implements OnInit {

  message: Observable<string>

  constructor(private store: Store<AppState>) {
    
   }

  ngOnInit() {
    this.message = this.store.select('message')
  }

  onclick() {
    this.store.dispatch({type: 'REVIEW'})
  }

}
