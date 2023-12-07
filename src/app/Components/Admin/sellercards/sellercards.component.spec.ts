import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercardsComponent } from './sellercards.component';

describe('SellercardsComponent', () => {
  let component: SellercardsComponent;
  let fixture: ComponentFixture<SellercardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellercardsComponent]
    });
    fixture = TestBed.createComponent(SellercardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
