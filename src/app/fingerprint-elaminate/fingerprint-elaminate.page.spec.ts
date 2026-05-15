import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FingerprintElaminatePage } from './fingerprint-elaminate.page';

describe('FingerprintElaminatePage', () => {
  let component: FingerprintElaminatePage;
  let fixture: ComponentFixture<FingerprintElaminatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintElaminatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
