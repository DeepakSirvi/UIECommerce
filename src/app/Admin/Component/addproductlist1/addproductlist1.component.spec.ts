import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproductlist1Component } from './addproductlist1.component';

describe('Addproductlist1Component', () => {
  let component: Addproductlist1Component;
  let fixture: ComponentFixture<Addproductlist1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Addproductlist1Component]
    });
    fixture = TestBed.createComponent(Addproductlist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
