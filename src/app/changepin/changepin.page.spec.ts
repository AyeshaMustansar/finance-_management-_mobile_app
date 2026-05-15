import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangepinPage } from './changepin.page';

describe('ChangepinPage', () => {
  let component: ChangepinPage;
  let fixture: ComponentFixture<ChangepinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
