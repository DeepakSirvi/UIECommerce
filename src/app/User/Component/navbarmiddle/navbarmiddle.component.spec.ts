import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmiddleComponent } from './navbarmiddle.component';

describe('NavbarmiddleComponent', () => {
  let component: NavbarmiddleComponent;
  let fixture: ComponentFixture<NavbarmiddleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarmiddleComponent]
    });
    fixture = TestBed.createComponent(NavbarmiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
