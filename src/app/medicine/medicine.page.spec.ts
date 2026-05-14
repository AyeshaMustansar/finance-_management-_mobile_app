import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicinePage } from './medicine.page';

describe('MedicinePage', () => {
  let component: MedicinePage;
  let fixture: ComponentFixture<MedicinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
