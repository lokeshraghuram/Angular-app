import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningsComponent } from './happenings.component';

describe('HappeningsComponent', () => {
  let component: HappeningsComponent;
  let fixture: ComponentFixture<HappeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
