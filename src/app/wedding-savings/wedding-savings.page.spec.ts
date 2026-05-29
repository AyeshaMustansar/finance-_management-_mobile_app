import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeddingSavingsPage } from './wedding-savings.page';

describe('WeddingSavingsPage', () => {
  let component: WeddingSavingsPage;
  let fixture: ComponentFixture<WeddingSavingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingSavingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
