import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaswordchangePage } from './paswordchange.page';

describe('PaswordchangePage', () => {
  let component: PaswordchangePage;
  let fixture: ComponentFixture<PaswordchangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaswordchangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
