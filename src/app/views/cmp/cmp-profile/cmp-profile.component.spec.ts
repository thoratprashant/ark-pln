import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpProfileComponent } from './cmp-profile.component';

describe('CmpProfileComponent', () => {
  let component: CmpProfileComponent;
  let fixture: ComponentFixture<CmpProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
