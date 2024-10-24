import { TestBed } from '@angular/core/testing';

import { KandidatiService } from './kandidati.service';

describe('KandidatiService', () => {
  let service: KandidatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KandidatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
