import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JhonFingerprintPage } from './jhon-fingerprint.page';

describe('JhonFingerprintPage', () => {
  let component: JhonFingerprintPage;
  let fixture: ComponentFixture<JhonFingerprintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JhonFingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
