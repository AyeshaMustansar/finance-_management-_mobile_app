import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RentPage } from './rent.page';

describe('RentPage', () => {
  let component: RentPage;
  let fixture: ComponentFixture<RentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
