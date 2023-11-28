import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsgrid2Component } from './productsgrid2.component';

describe('Productsgrid2Component', () => {
  let component: Productsgrid2Component;
  let fixture: ComponentFixture<Productsgrid2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productsgrid2Component]
    });
    fixture = TestBed.createComponent(Productsgrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
