import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpSignupComponent } from './cmp-signup.component';

describe('CmpSignupComponent', () => {
  let component: CmpSignupComponent;
  let fixture: ComponentFixture<CmpSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
