import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpProfileComponent } from './lp-profile.component';

describe('LpProfileComponent', () => {
  let component: LpProfileComponent;
  let fixture: ComponentFixture<LpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
