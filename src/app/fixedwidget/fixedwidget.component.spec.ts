import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedwidgetComponent } from './fixedwidget.component';

describe('FixedwidgetComponent', () => {
  let component: FixedwidgetComponent;
  let fixture: ComponentFixture<FixedwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
