import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarSavingsPage } from './car-savings.page';

describe('CarSavingsPage', () => {
  let component: CarSavingsPage;
  let fixture: ComponentFixture<CarSavingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
