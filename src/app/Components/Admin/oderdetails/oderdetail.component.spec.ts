import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderdetailComponent } from './oderdetail.component';

describe('OderdetailComponent', () => {
  let component: OderdetailComponent;
  let fixture: ComponentFixture<OderdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OderdetailComponent]
    });
    fixture = TestBed.createComponent(OderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
