import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroceriesPage } from './groceries.page';

describe('GroceriesPage', () => {
  let component: GroceriesPage;
  let fixture: ComponentFixture<GroceriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
