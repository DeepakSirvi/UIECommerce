import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSidebarComponent } from './no-sidebar.component';

describe('NoSidebarComponent', () => {
  let component: NoSidebarComponent;
  let fixture: ComponentFixture<NoSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoSidebarComponent]
    });
    fixture = TestBed.createComponent(NoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
