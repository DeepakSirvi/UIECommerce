import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingsample1Component } from './settingsample1.component';

describe('Settingsample1Component', () => {
  let component: Settingsample1Component;
  let fixture: ComponentFixture<Settingsample1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Settingsample1Component]
    });
    fixture = TestBed.createComponent(Settingsample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
