import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportPage } from './transport.page';

describe('TransportPage', () => {
  let component: TransportPage;
  let fixture: ComponentFixture<TransportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
