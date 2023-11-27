import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbottomComponent } from './navbarbottom.component';

describe('NavbarbottomComponent', () => {
  let component: NavbarbottomComponent;
  let fixture: ComponentFixture<NavbarbottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarbottomComponent]
    });
    fixture = TestBed.createComponent(NavbarbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
