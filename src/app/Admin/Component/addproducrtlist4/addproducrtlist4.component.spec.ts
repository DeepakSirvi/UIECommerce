import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addproducrtlist4Component } from './addproducrtlist4.component';

describe('Addproducrtlist4Component', () => {
  let component: Addproducrtlist4Component;
  let fixture: ComponentFixture<Addproducrtlist4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Addproducrtlist4Component]
    });
    fixture = TestBed.createComponent(Addproducrtlist4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
