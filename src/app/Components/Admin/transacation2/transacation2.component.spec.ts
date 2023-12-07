import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transacation2Component } from './transacation2.component';

describe('Transacation2Component', () => {
  let component: Transacation2Component;
  let fixture: ComponentFixture<Transacation2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Transacation2Component]
    });
    fixture = TestBed.createComponent(Transacation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
