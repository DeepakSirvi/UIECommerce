import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTagsComponent } from './by-tags.component';

describe('ByTagsComponent', () => {
  let component: ByTagsComponent;
  let fixture: ComponentFixture<ByTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByTagsComponent]
    });
    fixture = TestBed.createComponent(ByTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
