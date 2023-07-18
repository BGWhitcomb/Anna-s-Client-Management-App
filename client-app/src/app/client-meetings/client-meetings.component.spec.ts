import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeetingsComponent } from './client-meetings.component';

describe('ClientMeetingsComponent', () => {
  let component: ClientMeetingsComponent;
  let fixture: ComponentFixture<ClientMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientMeetingsComponent]
    });
    fixture = TestBed.createComponent(ClientMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
