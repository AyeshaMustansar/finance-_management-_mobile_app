import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonthlyPage } from './monthly.page';

describe('MonthlyPage', () => {
  let component: MonthlyPage;
  let fixture: ComponentFixture<MonthlyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
