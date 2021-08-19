import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpSignUpComponent } from './lp-sign-up.component';

describe('LpSignUpComponent', () => {
  let component: LpSignUpComponent;
  let fixture: ComponentFixture<LpSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
