import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchpanelComponent } from './switchpanel.component';

describe('SwitchpanelComponent', () => {
  let component: SwitchpanelComponent;
  let fixture: ComponentFixture<SwitchpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchpanelComponent]
    });
    fixture = TestBed.createComponent(SwitchpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
