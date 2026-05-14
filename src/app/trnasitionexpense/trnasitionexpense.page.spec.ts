import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrnasitionexpensePage } from './trnasitionexpense.page';

describe('TrnasitionexpensePage', () => {
  let component: TrnasitionexpensePage;
  let fixture: ComponentFixture<TrnasitionexpensePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrnasitionexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
