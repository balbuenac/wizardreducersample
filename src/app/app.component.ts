import { Component } from '@angular/core';

import {MenuItem} from 'primeng/primeng';

import { AppState } from './domain/app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  next() {
     this.activeIndex++;
  }

  ok() {
     this.activeIndex = 0;
  }

  onChange(label: string) {

  }

}
