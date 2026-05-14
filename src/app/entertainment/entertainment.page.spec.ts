import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntertainmentPage } from './entertainment.page';

describe('EntertainmentPage', () => {
  let component: EntertainmentPage;
  let fixture: ComponentFixture<EntertainmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
