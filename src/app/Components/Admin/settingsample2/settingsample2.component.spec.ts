import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Settingsample2Component } from './settingsample2.component';

describe('Settingsample2Component', () => {
  let component: Settingsample2Component;
  let fixture: ComponentFixture<Settingsample2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Settingsample2Component]
    });
    fixture = TestBed.createComponent(Settingsample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
