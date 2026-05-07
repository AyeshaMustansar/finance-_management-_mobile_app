import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountbalancePage } from './accountbalance.page';

describe('AccountbalancePage', () => {
  let component: AccountbalancePage;
  let fixture: ComponentFixture<AccountbalancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountbalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
