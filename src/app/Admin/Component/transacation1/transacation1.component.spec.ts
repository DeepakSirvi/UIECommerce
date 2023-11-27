import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transacation1Component } from './transacation1.component';

describe('Transacation1Component', () => {
  let component: Transacation1Component;
  let fixture: ComponentFixture<Transacation1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Transacation1Component]
    });
    fixture = TestBed.createComponent(Transacation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
