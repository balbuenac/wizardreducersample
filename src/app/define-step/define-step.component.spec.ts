import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineStepComponent } from './define-step.component';

describe('DefineStepComponent', () => {
  let component: DefineStepComponent;
  let fixture: ComponentFixture<DefineStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
