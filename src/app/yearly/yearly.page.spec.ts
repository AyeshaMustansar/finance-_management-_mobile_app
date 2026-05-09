import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearlyPage } from './yearly.page';

describe('YearlyPage', () => {
  let component: YearlyPage;
  let fixture: ComponentFixture<YearlyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
