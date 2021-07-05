import { TestBed } from '@angular/core/testing';

import { KunjunganTokoService } from './kunjungan-toko.service';

describe('KunjunganTokoService', () => {
  let service: KunjunganTokoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KunjunganTokoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
