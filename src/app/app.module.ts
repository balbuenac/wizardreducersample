import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// reducer dependencies
import { StoreModule } from '@ngrx/store';
import { wizardReducer } from './state/wizard.reducer';

// Wizard dependencies
import {WizardModule} from '../wizard/wizard.module';
import {ButtonModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { ConfirmStepComponent } from './confirm-step/confirm-step.component';
import { DefineStepComponent } from './define-step/define-step.component';
import { ReviewStepComponent } from './review-step/review-step.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmStepComponent,
    DefineStepComponent,
    ReviewStepComponent
  ],
  imports: [
    BrowserModule,
    WizardModule,
    ButtonModule,
    StoreModule.forRoot({ message: wizardReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
