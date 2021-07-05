import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KunjunganTokoComponent } from './kunjungan-toko.component';

describe('KunjunganTokoComponent', () => {
  let component: KunjunganTokoComponent;
  let fixture: ComponentFixture<KunjunganTokoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KunjunganTokoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KunjunganTokoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
