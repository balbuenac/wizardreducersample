import { Component, OnInit } from '@angular/core';

// Reducer dependencies
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../domain/app.state'

@Component({
  selector: 'app-define-step',
  templateUrl: './define-step.component.html',
  styleUrls: ['./define-step.component.css']
})
export class DefineStepComponent implements OnInit {

  message: Observable<string>

  constructor(private store: Store<AppState>) {
    
   }

  ngOnInit() {
   
    this.message = this.store.select('message')
  }

  onclick() {
    this.store.dispatch({type: 'DEFINE'})
  }

}
