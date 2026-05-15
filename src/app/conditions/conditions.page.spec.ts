import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionsPage } from './conditions.page';

describe('ConditionsPage', () => {
  let component: ConditionsPage;
  let fixture: ComponentFixture<ConditionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
