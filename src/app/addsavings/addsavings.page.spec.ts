import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddsavingsPage } from './addsavings.page';

describe('AddsavingsPage', () => {
  let component: AddsavingsPage;
  let fixture: ComponentFixture<AddsavingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
