import { TestBed } from '@angular/core/testing';

import { TecajiService } from './tecajevi.service';

describe('TecajiService', () => {
  let service: TecajiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecajiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
