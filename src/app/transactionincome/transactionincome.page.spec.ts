import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionincomePage } from './transactionincome.page';

describe('TransactionincomePage', () => {
  let component: TransactionincomePage;
  let fixture: ComponentFixture<TransactionincomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionincomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
