import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecurityPinPage } from './security-pin.page';

describe('SecurityPinPage', () => {
  let component: SecurityPinPage;
  let fixture: ComponentFixture<SecurityPinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
