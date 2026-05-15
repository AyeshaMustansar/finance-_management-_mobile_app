import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FingerprintPage } from './fingerprint.page';

describe('FingerprintPage', () => {
  let component: FingerprintPage;
  let fixture: ComponentFixture<FingerprintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
