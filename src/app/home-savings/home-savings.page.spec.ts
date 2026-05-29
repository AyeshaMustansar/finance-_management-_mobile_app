import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSavingsPage } from './home-savings.page';

describe('HomeSavingsPage', () => {
  let component: HomeSavingsPage;
  let fixture: ComponentFixture<HomeSavingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
