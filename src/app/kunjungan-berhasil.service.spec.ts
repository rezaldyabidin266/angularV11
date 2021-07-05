import { TestBed } from '@angular/core/testing';

import { KunjunganBerhasilService } from './kunjungan-berhasil.service';

describe('KunjunganBerhasilService', () => {
  let service: KunjunganBerhasilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KunjunganBerhasilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
