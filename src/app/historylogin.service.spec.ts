import { TestBed } from '@angular/core/testing';

import { HistoryloginService } from './historylogin.service';

describe('HistoryloginService', () => {
  let service: HistoryloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
