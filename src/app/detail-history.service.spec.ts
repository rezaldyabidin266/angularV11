import { TestBed } from '@angular/core/testing';

import { DetailHistoryService } from './detail-history.service';

describe('DetailHistoryService', () => {
  let service: DetailHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
