import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransitionincomeePage } from './transitionincomee.page';

describe('TransitionincomeePage', () => {
  let component: TransitionincomeePage;
  let fixture: ComponentFixture<TransitionincomeePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionincomeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
