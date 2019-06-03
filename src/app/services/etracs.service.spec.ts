import { TestBed } from '@angular/core/testing';

import { EtracsService } from './etracs.service';

describe('EtracsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtracsService = TestBed.get(EtracsService);
    expect(service).toBeTruthy();
  });
});
