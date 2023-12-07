import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsGridComponent } from './vendors-grid.component';

describe('VendorsGridComponent', () => {
  let component: VendorsGridComponent;
  let fixture: ComponentFixture<VendorsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorsGridComponent]
    });
    fixture = TestBed.createComponent(VendorsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
