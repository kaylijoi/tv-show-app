import { TestBed } from '@angular/core/testing';

import { CastListService } from './cast-list.service';

describe('CastListService', () => {
  let service: CastListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
