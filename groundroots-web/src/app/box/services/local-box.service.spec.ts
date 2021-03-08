import { TestBed } from '@angular/core/testing';

import { LocalBoxService } from './local-box.service';

describe('LocalBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalBoxService = TestBed.get(LocalBoxService);
    expect(service).toBeTruthy();
  });
});
