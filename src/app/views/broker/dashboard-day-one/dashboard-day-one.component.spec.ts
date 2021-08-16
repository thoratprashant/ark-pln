import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDayOneComponent } from './dashboard-day-one.component';

describe('DashboardDayOneComponent', () => {
  let component: DashboardDayOneComponent;
  let fixture: ComponentFixture<DashboardDayOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDayOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
