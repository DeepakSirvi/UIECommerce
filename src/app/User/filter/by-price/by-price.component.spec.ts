import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByPriceComponent } from './by-price.component';

describe('ByPriceComponent', () => {
  let component: ByPriceComponent;
  let fixture: ComponentFixture<ByPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByPriceComponent]
    });
    fixture = TestBed.createComponent(ByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
