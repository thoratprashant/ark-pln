import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerSignUpComponent } from './broker-sign-up.component';

describe('BrokerSignUpComponent', () => {
  let component: BrokerSignUpComponent;
  let fixture: ComponentFixture<BrokerSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokerSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
