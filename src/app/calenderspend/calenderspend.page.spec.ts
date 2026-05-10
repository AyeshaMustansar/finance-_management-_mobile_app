import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalenderspendPage } from './calenderspend.page';

describe('CalenderspendPage', () => {
  let component: CalenderspendPage;
  let fixture: ComponentFixture<CalenderspendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderspendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
