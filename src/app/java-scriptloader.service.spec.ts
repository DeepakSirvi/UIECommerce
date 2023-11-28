import { TestBed } from '@angular/core/testing';

import { JavaScriptloaderService } from './java-scriptloader.service';

describe('JavaScriptloaderService', () => {
  let service: JavaScriptloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaScriptloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
