import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproducrtlist3Component } from './addproducrtlist3.component';

describe('Addproducrtlist3Component', () => {
  let component: Addproducrtlist3Component;
  let fixture: ComponentFixture<Addproducrtlist3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Addproducrtlist3Component]
    });
    fixture = TestBed.createComponent(Addproducrtlist3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
