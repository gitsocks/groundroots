import { TestBed } from '@angular/core/testing';

import { CoffeeBuilderService } from './coffee-builder.service';

describe('CoffeeBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeBuilderService = TestBed.get(CoffeeBuilderService);
    expect(service).toBeTruthy();
  });
});
