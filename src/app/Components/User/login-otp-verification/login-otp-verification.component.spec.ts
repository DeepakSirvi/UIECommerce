import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOTPVerificationComponent } from './login-otp-verification.component';

describe('LoginOTPVerificationComponent', () => {
  let component: LoginOTPVerificationComponent;
  let fixture: ComponentFixture<LoginOTPVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginOTPVerificationComponent]
    });
    fixture = TestBed.createComponent(LoginOTPVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
