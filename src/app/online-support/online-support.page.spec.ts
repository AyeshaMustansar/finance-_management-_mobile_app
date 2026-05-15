import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OnlineSupportPage } from './online-support.page';

describe('OnlineSupportPage', () => {
  let component: OnlineSupportPage;
  let fixture: ComponentFixture<OnlineSupportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
