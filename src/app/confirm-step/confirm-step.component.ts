import { Component, OnInit } from '@angular/core';

// Reducer dependencies
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../domain/app.state'

@Component({
  selector: 'app-confirm-step',
  templateUrl: './confirm-step.component.html',
  styleUrls: ['./confirm-step.component.css']
})
export class ConfirmStepComponent implements OnInit {

  message: Observable<string>

  constructor(private store: Store<AppState>) {
    
   }

  ngOnInit() {
    this.message = this.store.select('message')
  }

  onclick() {
    this.store.dispatch({type: 'CONFIRM'})
  }

}
