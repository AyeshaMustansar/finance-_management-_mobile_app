import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityFingerprintPage } from './security-fingerprint.page';

describe('SecurityFingerprintPage', () => {
  let component: SecurityFingerprintPage;
  let fixture: ComponentFixture<SecurityFingerprintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityFingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
