import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KunjunganBerhasilComponent } from './kunjungan-berhasil.component';

describe('KunjunganBerhasilComponent', () => {
  let component: KunjunganBerhasilComponent;
  let fixture: ComponentFixture<KunjunganBerhasilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KunjunganBerhasilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KunjunganBerhasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
