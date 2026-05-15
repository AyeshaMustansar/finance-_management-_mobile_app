import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationSettingsPage } from './notification-settings.page';

describe('NotificationSettingsPage', () => {
  let component: NotificationSettingsPage;
  let fixture: ComponentFixture<NotificationSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
