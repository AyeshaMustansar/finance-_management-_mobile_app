import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuickanalysisPage } from './quickanalysis.page';

describe('QuickanalysisPage', () => {
  let component: QuickanalysisPage;
  let fixture: ComponentFixture<QuickanalysisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickanalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
