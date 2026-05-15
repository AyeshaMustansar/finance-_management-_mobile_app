import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelsavingsPage } from './travelsavings.page';

describe('TravelsavingsPage', () => {
  let component: TravelsavingsPage;
  let fixture: ComponentFixture<TravelsavingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
