import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryloginComponent } from './historylogin.component';

describe('HistoryloginComponent', () => {
  let component: HistoryloginComponent;
  let fixture: ComponentFixture<HistoryloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
