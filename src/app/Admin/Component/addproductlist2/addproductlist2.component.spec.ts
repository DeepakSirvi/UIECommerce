import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproductlist2Component } from './addproductlist2.component';

describe('Addproductlist2Component', () => {
  let component: Addproductlist2Component;
  let fixture: ComponentFixture<Addproductlist2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Addproductlist2Component]
    });
    fixture = TestBed.createComponent(Addproductlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
