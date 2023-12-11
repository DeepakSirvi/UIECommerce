import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductGoutamComponent } from './add-product-goutam.component';

describe('AddProductGoutamComponent', () => {
  let component: AddProductGoutamComponent;
  let fixture: ComponentFixture<AddProductGoutamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductGoutamComponent]
    });
    fixture = TestBed.createComponent(AddProductGoutamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
