import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCategariesComponent } from './by-categaries.component';

describe('ByCategariesComponent', () => {
  let component: ByCategariesComponent;
  let fixture: ComponentFixture<ByCategariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByCategariesComponent]
    });
    fixture = TestBed.createComponent(ByCategariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
