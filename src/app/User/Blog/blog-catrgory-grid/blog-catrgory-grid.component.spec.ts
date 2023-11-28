import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCatrgoryGridComponent } from './blog-catrgory-grid.component';

describe('BlogCatrgoryGridComponent', () => {
  let component: BlogCatrgoryGridComponent;
  let fixture: ComponentFixture<BlogCatrgoryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCatrgoryGridComponent]
    });
    fixture = TestBed.createComponent(BlogCatrgoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
