import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewesComponent } from './reviewes.component';

describe('ReviewesComponent', () => {
  let component: ReviewesComponent;
  let fixture: ComponentFixture<ReviewesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewesComponent]
    });
    fixture = TestBed.createComponent(ReviewesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
