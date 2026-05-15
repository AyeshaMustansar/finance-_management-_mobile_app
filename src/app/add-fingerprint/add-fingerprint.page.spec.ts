import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFingerprintPage } from './add-fingerprint.page';

describe('AddFingerprintPage', () => {
  let component: AddFingerprintPage;
  let fixture: ComponentFixture<AddFingerprintPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFingerprintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
