import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofServiceComponent } from './termsof-service.component';

describe('TermsofServiceComponent', () => {
  let component: TermsofServiceComponent;
  let fixture: ComponentFixture<TermsofServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsofServiceComponent]
    });
    fixture = TestBed.createComponent(TermsofServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
