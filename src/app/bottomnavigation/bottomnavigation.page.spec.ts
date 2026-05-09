import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomnavigationPage } from './bottomnavigation.page';

describe('BottomnavigationPage', () => {
  let component: BottomnavigationPage;
  let fixture: ComponentFixture<BottomnavigationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomnavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
