import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexwidgetComponent } from './flexwidget.component';

describe('FlexwidgetComponent', () => {
  let component: FlexwidgetComponent;
  let fixture: ComponentFixture<FlexwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
