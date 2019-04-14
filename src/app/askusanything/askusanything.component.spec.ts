import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskusanythingComponent } from './askusanything.component';

describe('AskusanythingComponent', () => {
  let component: AskusanythingComponent;
  let fixture: ComponentFixture<AskusanythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskusanythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskusanythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
